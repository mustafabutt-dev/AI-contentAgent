'use server'
import { createOpenAI as createGroq  } from '@ai-sdk/openai';
import {  generateText } from 'ai';

export const MixtralService = async (prompt) => {

    const groq = createGroq({
      baseURL: 'https://api.groq.com/openai/v1',
      apiKey: process.env.GROQ_API_KEY,
    });
    const { text } = await generateText({
      model: groq('mixtral-8x7b-32768'),
      prompt: prompt,
    });
    // console.log("welcome to Mixtral start");
    // console.log(text);
    // console.log("welcome to Mixtral end");
    return text.replace(/^[\s\S]*?\n---/, '---');
  }