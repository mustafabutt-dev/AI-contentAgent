'use server'
import { deepseek } from '@ai-sdk/deepseek';
import {  generateText } from 'ai';

export const DeepSeekService = async (prompt) => {

    const deepSeek = deepseek({
        apiKey: process.env.DEEPSEEK_API_KEY, 
    });

    console.log("reqst came123")
    console.log(prompt)
    const { reasoning, text } = await generateText({
        model: deepseek('deepseek-reasoner'),
        prompt: prompt
    });
    console.log("welcome to Mixtral start");
    console.log(text);
    console.log("welcome to Mixtral end");
    return text;
  }