'use server'
import { deepseek } from '@ai-sdk/deepseek';
import {  generateText } from 'ai';

export const DeepSeekService = async (prompt) => {

    const deepSeek = deepseek({
        apiKey: process.env.DEEPSEEK_API_KEY, 
    });
    const { reasoning, text } = await generateText({
        model: deepseek('deepseek-reasoner'),
        prompt: prompt
    });
    return text;
  }