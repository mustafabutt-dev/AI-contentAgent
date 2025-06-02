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
import { LinkedInService } from '@/app/utils/LinkedInService';
import { FacebooknService } from '@/app/utils/FacebookService';
import { XService } from '@/app/utils/xService';
import { scrapeBlogTitle } from '@/app/utils/scraper';

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

export async function makeServerCall(formData: FormData) {
  console.log("****************************** server call form data start hooooo1")

  if (JSON.parse(formData.get("platforms")).value && JSON.parse(formData.get("platforms")).value !== '""') 
    return null

  const platforms = JSON.parse(formData.get("platforms"))
  let results: { value: string; data: string }[] = [];
  for (let i = 0; i < platforms.length; i++) {

    try {
  
        const response = await OpenAIService({
          model: "gpt-4o",
          maxTokens: 500,
          temperature: 0.3,
          maxRetries: 5,
          prompt: `I want to create a ${platforms[i].value} post. Please follow these instructions:
          1. Read and summarize the key points from this blog post: ${formData.get("url")}
          2. Keep the tone ${formData.get("mood")} and professional.
          3. The target audience is ${formData.get("audience")}.
          4. Include popular and relevant hashtags.
          5. The total post length should be between 150–200 characters including hashtags.
          6. Do not include any introductory or explanatory text. Return only the post content.`
        });
        results.push({
          value: platforms[i].value,
          data: response.content || response.text || response || "", // adjust based on actual OpenAIService return format
        });
        console.log("reslut is ");
       
    } catch (error) {
      console.error(`Failed to generate post for ${platforms[i]}:`, error);
    }
  }
  let blogTitle = await scrapeBlogTitle(formData.get("url"));

  let resp=[];
  if(platforms.find(p => p.value === 'linkedin'))
    resp.push(await LinkedInService(results.find(p => p.value === 'linkedin'), formData.get("url"), blogTitle))
  if(platforms.find(p => p.value === 'facebook'))
    resp.push(await FacebooknService(results.find(p => p.value === 'facebook'), formData.get("url")))
  if(platforms.find(p => p.value === 'x'))
  resp.push(await XService(results.find(p => p.value === 'x'), formData.get("url")))
  return resp
}