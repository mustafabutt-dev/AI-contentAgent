'use server'
import { createOpenAI as createGroq  } from '@ai-sdk/openai';
import {  generateText } from 'ai';

export const LlamaService = async (prompt) => {
    const groq = createGroq({
      baseURL: 'https://api.groq.com/openai/v1',
      apiKey: process.env.GROQ_API_KEY,
    });
    const { text } = await generateText({
      model: groq('llama-3.3-70b-versatile'),
      prompt: prompt,
    });
    console.log("welcome to Llama start");
    console.log(text);
    console.log("welcome to Llama end");
    return text
  }