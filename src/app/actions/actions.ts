'use server'

import { markdownFileGenertaor } from '@/utils/markdownFileGenerator';
import { redirect } from 'next/navigation'
import { promptGenerator } from '@/utils/promptGenerator';
import { onlinePromptGen } from '@/utils/onlinePropmtGen';
import { GenerateFreeFlowingFormat } from '@/utils/freeFlowingFormat';
import { GenerateOnlineFreeFlowingFormat } from '../utils/onlineFreeFlowingFormat';
import { GenerateTOCFormat } from '@/utils/tocFormat';
import { GenerateOnlineTOCFormat } from '../utils/OnlineTOCFormat';
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse, userAgent } from 'next/server'
import data from '../../../public/data.json'
import productsData from '../../../public/products.json'
import { OpenAIService } from '@/utils/openAIService';
import { MixtralService } from '@/app/utils/MixtralService';
import { DeepSeekService } from '@/app/utils/deepSeekService';

export async function InvokeOpenAI(formData: FormData) {

  let product;

  // const filePath = path.join(process.cwd(), 'public', 'sample.txt');
  // const text = fs.readFileSync(filePath, 'utf-8');

  console.log("****************************** form data start")
  console.log(formData)
  console.log("****************************** form data end")
  let prompt  =""; 
  if(formData.get('BlogType') == "programmatic"){
    product = data.find(item => item.value === formData.get("products"));
    prompt = await promptGenerator(formData,product);
  }
  else {
    product = productsData.find(item => item.value === formData.get("products"));
    prompt = await onlinePromptGen(formData,product);
  }

  let fileData = ''; let text='';

  if(formData.get('model') == "DeepSeek R1")
    text = await DeepSeekService(prompt)
  if(formData.get('model') == "Mixtral")
    text = await MixtralService(prompt)
  else {
    text  = await OpenAIService({
      model: formData.get('model'),
      maxTokens: Number(formData.get('tokenLimit')),
      temperature: Number(formData.get('temprature')),
      maxRetries: 5,
      prompt: prompt,
    });
  }
  console.log("here is the raw output -- start");
  console.log(text)
  console.log("here is the raw output  -- end");
  switch (formData.get('format')) {
    case 'Free flowing':
      formData.get('BlogType') == "programmatic" ? fileData = await GenerateFreeFlowingFormat(formData,product,text) : fileData = await GenerateOnlineFreeFlowingFormat(formData,product,text)
        break;
    case 'Table of content(TOC)-based':
      formData.get('BlogType') == "programmatic" ? fileData = await GenerateTOCFormat(formData,product,text) : fileData = await GenerateOnlineTOCFormat(formData,product,text)
        break;
    default:
      fileData = await GenerateFreeFlowingFormat(formData,product,text)
  }
  
  await markdownFileGenertaor(fileData,formData.get("uuid"), formData.get("title"));
  console.log(`all done`)
  redirect('/download')
}