'use server'
import { MixtralService } from './MixtralService';
import { OpenAIService } from './openAIService';

import {markdownToJSON, jsonToMarkdown} from '@/utils/utils';

export const OptimizationService = async (fileContent, primrayKeyword) => {
    
    const data = await markdownToJSON(fileContent);
  
    let keywords=[];
    data.metadata["title"] = primrayKeyword;

    keywords = await OpenAIService({
        model: 'gpt-4o',
        maxTokens: 1500,
        temperature: 1.3,
        maxRetries: 5,
        prompt: `Please provide 7 widely searched long-tail keywords relevant to the title ${primrayKeyword}. The keywords should be highly relevant and specific to the topic. Simply return them in the form of an array.`,
        });
        keywords = keywords.replace(/^.*?\[\s*/s, "[") // Remove text before the array
        .replace(/\s*$/, "") // Remove trailing spaces
        .replace(/```$/, ""); // Remove trailing ``` if it exists
        console.log(keywords)
    keywords = JSON.parse(keywords);
    keywords.push(primrayKeyword)

    data.metadata['tags'] = `${JSON.stringify(keywords, null, 2)}`

    data.metadata['description'] = await OpenAIService({
        model: 'gpt-4o',
        maxTokens: 1500,
        temperature: 1.3,
        maxRetries: 5,
        prompt: `Rewrite the following description strictly between 140-160 characters ensuring the keyword **${primrayKeyword}** is incorporated: ${data?.metadata?.description}`,
      });
    data.metadata['summary'] = await OpenAIService({
        model: 'gpt-4o',
        maxTokens: 1500,
        temperature: 1.3,
        maxRetries: 5,
        prompt: `Rewrite the following summary strictly between 140-160 characters ensuring the keyword **${primrayKeyword}** is incorporated ${data?.metadata?.summary}`,
      });
    for (const [key, value] of Object.entries(data.sections).slice(0, -1)) {
        console.log("now in the keys "+key)
        data.sections[key] = await OpenAIService({
            model: 'gpt-4o',
            maxTokens: 1500,
            temperature: 1.3,
            maxRetries: 5,
            prompt: `Rewrite the following sentences, ensuring the keyword **${primrayKeyword}** is incorporated into the paragraph just for once if not already included: **${value}**. The list data, whether bullet or numbered, must remain entirely unchanged. Do not edit, reformat, or alter any part of the list. You may modify other content, but the structure and content of the list data must be strictly preserved. Also make the **${primrayKeyword}** bold.`
          });
    }

    const markdown = await jsonToMarkdown(data);
  
    return markdown
  }