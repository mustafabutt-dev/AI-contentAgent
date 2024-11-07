'use server'
 
import { openai } from '@ai-sdk/openai';
import { streamText, convertToCoreMessages,generateText } from 'ai';
import { markdownFileGenertaor } from '@/utils/markdownFileGenerator';
import { redirect } from 'next/navigation'
import { promptGenerator } from '@/utils/promptGenerator';
import { GenerateFreeFlowingFormat } from '@/utils/freeFlowingFormat';
import { GenerateTOCFormat } from '@/utils/tocFormat';
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse, userAgent } from 'next/server'
import data from '../../../public/data.json'

export async function InvokeOpenAI(formData: FormData) {

  const product = data.find(item => item.value === formData.get("products"));
  const prompt = await promptGenerator(formData,product);

  console.log("****************************** form data start")
  console.log(formData)
  console.log("****************************** form data end")
  let fileData = '';

  const { text } = await generateText({
    model: openai(formData.get('model')),
    maxTokens: Number(formData.get('tokenLimit')),
    temperature: Number(formData.get('temprature')),
    maxRetries: 5,
    prompt: prompt,
  });
  console.log("****************************** start")
  console.log(text)
  console.log("****************************** end")


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
