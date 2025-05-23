'use server'
const fs = require('fs').promises;
import { NextResponse } from 'next/server';
import path from 'path';
import { redirect } from "next/navigation";
import { checkIfExists, processRequest } from "@/app/utils/utils";
import eventBus from '@/app/components/eventBus';
import { OpenAIService } from '@/app/utils/openAIService';
import { EventEmitter } from 'events';
import { MixtralService } from '@/app/utils/MixtralService';

if (!globalThis.eventEmitter) {
  globalThis.eventEmitter = new EventEmitter();
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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
    const sourceMD = await request.text()
   
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    let i = 0;
    const languages = JSON.parse(request.headers.get('languages'));

    if (!(await checkIfExists(path.join(`${process.cwd()}/public`, 'blog-posts'))))
        await fs.mkdir(path.join(`${process.cwd()}/public`, 'blog-posts'));
    
    if (!(await checkIfExists(path.join(`${process.cwd()}/public/blog-posts`, request.headers.get('uuid')))))
        await fs.mkdir(path.join(`${process.cwd()}/public/blog-posts`,request.headers.get('uuid')));

    for (const { value, label } of languages) {
        const fileName = `${process.cwd()}/public/blog-posts/${request.headers.get('uuid')}/index.${value}.md`;
        const prompt = `Translate the following MD file to the ${label} locale and provide the result in the exact MD format.\n
        1. Do not translate the "gist" tag or modify its content.\n
        2. Also, do not translate 'date', 'url', 'tags:', and 'categories:' and list of urls at the bottom if present. Only translate title, seoTitle, description, and summary properties. I noticed sometimes you translate 'tags' and 'categories' properties which you should not do so. \n
        3. Prepend the locale followed by a forward slash sign to the beginning of the url: property:\n\n${sourceMD}`;

        let content;
        i++;
        try {
            console.log(`emietting .....${i} ${request.headers.get('model')}`)    
            let progress = ((i + 1) / languages.length) * 100;
            let message = `Translating in ${label}, Progress: ${progress.toFixed(2)}%`;   
            globalThis.eventEmitter.emit('update', message);

            // if (i !== 1){
            //   console.log(`gone sleepo0 ${i}`);
            //   await sleep(60000);
            //   console.log("i am awake now");
            // }
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
            await fs.writeFile(fileName, clearData);
            console.log(`File created: ${fileName}`);

            
            // console.log("hitting sleep")
            // await sleep(13000);
            // console.log(" sleep off")

        } catch (err) {
            console.error(`Failed to create file ${fileName}:`, err);
        }
    }
 
    writer.close();
    return new Response(JSON.stringify({ status: 'success' }), { status: 200 });

   
}