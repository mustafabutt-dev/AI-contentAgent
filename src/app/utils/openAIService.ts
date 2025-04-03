'use server'
 
import { openai  } from '@ai-sdk/openai';
import { generateText } from 'ai';

export const OpenAIService = async (modelInput) => {
    const { text } = await generateText({
        model: openai(modelInput.model),
        maxTokens: modelInput.maxTokens,
        temperature: modelInput.temperature,
        maxRetries: 5,
        prompt: modelInput.prompt,
      });
    console.log("****************************** content start ")
    console.log(text)
    console.log("****************************** content end")
    return text.replace(/^[\s\S]*?\n---/, '---');
}