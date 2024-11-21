
'use server'
 
import { openai } from '@ai-sdk/openai';
import { streamText, convertToCoreMessages,generateText } from 'ai';

export const translateData = async (content, language) => {
    const prompt = `Translate the following MD file to the ${language} locale and provide the result in the exact MD format.\n
        Do not translate date, url, tags, and categories properties in front matter.\n
        Do not translate \'figure short code\'. Only translate title, seoTitle, author, description, and summary properties.\n
        Add locale to the beginning of the url property.  In \'See Also\' section, add locale to the urls after https://blog.aspose.com/:\n\n${content}`;
    console.log("language is "+language);

    const { text } = await generateText({
        model: openai('gpt-4o'),
        maxTokens: Number('1500'),
        temperature: Number('0.3'),
        maxRetries: 5,
        prompt: prompt,
    });

    console.log("****************************** start")
    console.log(text)
    console.log("****************************** end")
    return text;
};
