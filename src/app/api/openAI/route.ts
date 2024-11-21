'use server'
const fs = require('fs').promises;
import { NextResponse } from 'next/server';
import path from 'path';
import { redirect } from "next/navigation";
import { checkIfExists, processRequest } from "@/app/utils/utils";
import eventBus from '@/app/components/eventBus';
import { translateData } from '@/app/utils/openAIService';
import { EventEmitter } from 'events';

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
    const sourceMD = await request.text()
    console.log(sourceMD);

    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    let i = 0;
    const languages = [
        { code: "ar", name: "Arabic" },
        { code: "cs", name: "Czech" },
        { code: "de", name: "German" },
        { code: "es", name: "Spanish" },
        { code: "fa", name: "Persian" },
        { code: "fr", name: "French" },
        { code: "he", name: "Hebrew" },
        { code: "id", name: "Indonesian" },
        { code: "it", name: "Italian" },
        { code: "ja", name: "Japanese" },
        { code: "ko", name: "Korean" },
        { code: "pl", name: "Polish" },
        { code: "pt", name: "Portuguese" },
        { code: "ru", name: "Russian" },
        { code: "th", name: "Thai" },
        { code: "tr", name: "Turkish" },
        { code: "uk", name: "Ukrainian" },
        { code: "vi", name: "Vietnamese" },
        { code: "zh-hant", name: "Chinese Tradition" },
        { code: "zh", name: "Chinese" },
        { code: "sv", name: "Swedish" }
      ]
    if (!(await checkIfExists(path.join(`${process.cwd()}/public`, 'blog-posts'))))
        await fs.mkdir(path.join(`${process.cwd()}/public`, 'blog-posts'));
    
    if (!(await checkIfExists(path.join(`${process.cwd()}/public/blog-posts`, request.headers.get('uuid')))))
        await fs.mkdir(path.join(`${process.cwd()}/public/blog-posts`,request.headers.get('uuid')));

    for (const { code, name } of languages) {
        const fileName = `${process.cwd()}/public/blog-posts/${request.headers.get('uuid')}/index.${code}.md`;

        // const content = await processRequest(name);
       
        try {
            console.log("emietting ....")    
            let progress = ((i + 1) / languages.length) * 100;
            let message = `Translating in ${name}, Progress: ${progress.toFixed(2)}%`;     
            globalThis.eventEmitter.emit('update', message);
            i++;
            const content = await translateData(sourceMD,name);
            const clearData = content.replace(/^\s*```markdown\s*|\s*```$/g, '');
            await fs.writeFile(fileName, clearData);
            console.log(`File created: ${fileName}`);
        } catch (err) {
            console.error(`Failed to create file ${fileName}:`, err);
        }
    }
 
    writer.close();
    return new Response(JSON.stringify({ status: 'success' }), { status: 200 });

   
}