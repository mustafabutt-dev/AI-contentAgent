'use server'

import { markdownFileGenertaor } from '@/utils/markdownFileGenerator';
import { redirect } from 'next/navigation'
import { promptGenerator } from '@/utils/promptGenerator';
import { GenerateFreeFlowingFormat } from '@/utils/freeFlowingFormat';
import { GenerateTOCFormat } from '@/utils/tocFormat';
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse, userAgent } from 'next/server'
import data from '../../../public/data.json'
import { OpenAIService } from '@/utils/openAIService';
import { LlamaService } from '@/utils/LlamaService';

export async function InvokeOpenAI(formData: FormData) {

  const product = data.find(item => item.value === formData.get("products"));
  const prompt = await promptGenerator(formData,product);


  // const filePath = path.join(process.cwd(), 'public', 'sample.txt');
  // const text = fs.readFileSync(filePath, 'utf-8');

  console.log("****************************** form data start")
  console.log(formData)
  console.log("****************************** form data end")
  let fileData = ''; let text='';

  if(formData.get('model') == "Llama")
    text = await LlamaService(prompt)
  else {
    text  = await OpenAIService({
      model: formData.get('model'),
      maxTokens: Number(formData.get('tokenLimit')),
      temperature: Number(formData.get('temprature')),
      maxRetries: 5,
      prompt: prompt,
    });
  }

  switch (formData.get('format')) {
    case 'Free flowing':
      fileData = await GenerateFreeFlowingFormat(formData,product,text)
        break;
    case 'Table of content(TOC)-based':
      fileData = await GenerateTOCFormat(formData,product,text)
        break;
    default:
      fileData = await GenerateFreeFlowingFormat(formData,product,text)
  }
  
  await markdownFileGenertaor(fileData,formData.get("uuid"), formData.get("title"));
  console.log(`all done`)
  redirect('/download')
}