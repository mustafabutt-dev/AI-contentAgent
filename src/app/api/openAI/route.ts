'use server'
const fs = require('fs').promises;
import { NextResponse } from 'next/server';
import path from 'path';
import { redirect } from "next/navigation";
import { checkIfExists, processRequest, syncTagsAndCategories } from "@/app/utils/utils";
import eventBus from '@/app/components/eventBus';
import { OpenAIService } from '@/app/utils/openAIService';
import { EventEmitter } from 'events';
import { MixtralService } from '@/app/utils/MixtralService';
import { updateMarkdownLinksWithLanguage } from '@/app/utils/utils';

if (!globalThis.eventEmitter) {
  globalThis.eventEmitter = new EventEmitter();
}

// GET method for handling Server-Sent Events (SSE)
export async function GET(request) {
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();

  globalThis.eventEmitter.on('update', (data) => {
    writer.write(`data: ${JSON.stringify(data)}\n\n`);
  });

  request.signal.addEventListener('abort', () => {
    writer.close();
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}

export async function POST(request: Request) {

    let sourceMD = await request.text()
   
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    let i = 0;
    const languages = JSON.parse(request.headers.get('languages'));

    if (!(await checkIfExists(path.join(`${process.cwd()}/public`, 'blog-posts'))))
        await fs.mkdir(path.join(`${process.cwd()}/public`, 'blog-posts'));
    
    if (!(await checkIfExists(path.join(`${process.cwd()}/public/blog-posts`, request.headers.get('uuid')))))
        await fs.mkdir(path.join(`${process.cwd()}/public/blog-posts`,request.headers.get('uuid')));

    for (const { value, label } of languages) {

        let sourceMDModifiedExplore = await updateMarkdownLinksWithLanguage(sourceMD, value);
        
        const fileName = `${process.cwd()}/public/blog-posts/${request.headers.get('uuid')}/index.${value}.md`;
        const prompt = `Translate the following MD file to the ${label} locale and provide the result in the exact MD format.\n
        1. Do not translate the "gist" tag or modify its content.\n
        2. Also, do not translate 'date', 'url', 'tags:', and 'categories:' and list of urls at the bottom if present. Only translate title, seoTitle, description, and summary properties. I noticed sometimes you translate 'tags:' and 'categories:' properties which you should not do so and it is very important. \n
        3. Prepend the locale followed by a forward slash sign to the beginning of the url: property:\n\n${sourceMDModifiedExplore}`;

        let content;
        i++;
        try {
            console.log(`emietting .....${i} ${request.headers.get('model')}`)    
            let progress = ((i + 1) / languages.length) * 100;
            let message = `Translating in ${label}, Progress: ${progress.toFixed(2)}%`;   
            globalThis.eventEmitter.emit('update', message);

            if(request.headers.get('model') == "Mixtral")
              content = await MixtralService(prompt)
            if(request.headers.get('model') == "gpt-4o-mini")
              content = await OpenAIService({
                  model: 'gpt-4o-mini',
                  maxTokens: Number('8000'),
                  temperature: Number('0.7'),
                  maxRetries: 5,
                  prompt: prompt,
              });
          
            const clearData = content.replace(/^\s*```markdown\s*|\s*```$/g, '');

            const updatedContent = await syncTagsAndCategories(sourceMDModifiedExplore, clearData);
            
            await fs.writeFile(fileName, updatedContent);
            console.log(`File created: ${fileName}`);

            
        } catch (err) {
            console.error(`Failed to create file ${fileName}:`, err);
        }
    }
 
    writer.close();
    return new Response(JSON.stringify({ status: 'success' }), { status: 200 });

   
}