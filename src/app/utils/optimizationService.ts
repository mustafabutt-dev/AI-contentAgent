'use server'
import { MixtralService } from './MixtralService';

import {markdownToJSON, jsonToMarkdown} from '@/utils/utils';

export const OptimizationService = async (fileContent, primrayKeyword) => {

    const data = await markdownToJSON(fileContent);

    let keywords=[];
    if(JSON.parse(data.metadata["tags"]).length < 3){
       
        keywords = await MixtralService(`Please provide five widely searched long-tail keywords relevant to the title ${primrayKeyword}. The keywords should be highly relevant and specific to the topic. Simply return them in the form of an array.`);
        keywords = JSON.parse(keywords);
        keywords.push(primrayKeyword)
    }
     
    data.metadata['tags'] = `[${keywords.join(',')}]`;
    data.metadata['description'] = await MixtralService(`Rewrite the following description ensuring the keyword **${primrayKeyword}** is incorporated, ensuring the length is strictly between 140-160 characters: ${data?.metadata?.description}`)
    data.metadata['summary'] = await MixtralService(`Rewrite the following summary ensuring the keyword **${primrayKeyword}** is incorporated,, ensuring the length is strictly between 140-160 characters: ${data?.metadata?.summary}`)
    for (const [key, value] of Object.entries(data.sections)) {
        data.sections[key] = await MixtralService(`Rewrite the following sentences, ensuring the keyword **${primrayKeyword}** is incorporated into the paragraph just for once if not already included: **${value}**. The list data, whether bullet or numbered, must remain entirely unchanged. Do not edit, reformat, or alter any part of the list. You may modify other content, but the structure and content of the list data must be strictly preserved.`)
    }
    const markdown = await jsonToMarkdown(data);
    console.log("markdown processed.");
    return markdown
  }