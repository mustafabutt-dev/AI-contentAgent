'use server'

import { promises as fs } from 'fs';
import path from 'path';

export const parseInputToObjects = async (input:string)=>{
    const result: { heading: string, content: string }[] = [];
    
    // Regular expression to match headings and their corresponding content
    const regex = /##\s*(.+?)\n([\s\S]*?)(?=\n##|\n*$)/g;

    let match;
    while ((match = regex.exec(input)) !== null) {
        const heading = match[1].trim();
        const content = match[2].trim();
        result.push({ heading, content });
    }
    return result;
}

export const filterSections = async (output:object,input:string)=>{
   
    let data = output.find(item => item.heading === input);
    if(input == "Meta Title" || input == "Meta Description" || input == "Short Summary"){
        data.content = data.content.replace(":","");
        return data
    }
    return data
}

export const getDirectoryName = async (title:string)=>{

    let formattedTitle = await insertDashes(title);
    let date = getFormattedDate();
    return `${date}-${formattedTitle}`
}
export const makeBlogURL = async (input:string, prefix:string)=>{
    let data = await insertDashes(input);
    return '/'+prefix+'/'+data+'/'
}

export const insertDashes = async (input:string)=>{

    return input
    .replace(/c#/gi, 'csharp')  
    .toLowerCase()                
    .replace(/[^a-z0-9\s]/g, '')  
    .trim()                       
    .replace(/\s+/g, '-'); 
}

export const titleCase = async (input: string) => {
    const skipWords = ['in', 'the', 'for', 'and', 'of', 'on', 'at', 'to', 'with', 'using'];
    input = input.replace(":","");
   
    return input
        .toLowerCase()
        .replace(/\b\w+/g, (word, index) => {
            if (index === 0 || !skipWords.includes(word)) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word;
        })
        .replace(/Csharp/i, 'C#');
};

export const normalizeHeadings = async (data)=>{

    return data.split('\n').map(line => {
        const headingLevel = (line.match(/^#+/) || [''])[0].length;

        if (headingLevel < 2) {
            return line.replace(/^#+/, '##');
        } else if (headingLevel > 2) {
            return line.replace(/^#+/, '##');
        }
        return line;
    }).join('\n');
}
const getFormattedDate = (): string => {
    const date = new Date();

    // Format date to 'Asia/Karachi' timezone
    const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Karachi',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
    };
    
    const formattedDateParts = new Intl.DateTimeFormat('en-US', options).formatToParts(date);

    // Extract year, month, and day from formatted parts
    const year = formattedDateParts.find(part => part.type === 'year')?.value;
    const month = formattedDateParts.find(part => part.type === 'month')?.value;
    const day = formattedDateParts.find(part => part.type === 'day')?.value;

    return `${year}-${month}-${day}`;
};

export const checkIfExists = async (filePath)=> {
    try {
      await fs.access(filePath);
      return true
    } catch {
     return false
    }
  }

export const getDate = async ()=> {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const now = new Date();
    const dayName = days[now.getUTCDay()];
    const day = now.getUTCDate().toString().padStart(2, '0');
    const monthName = months[now.getUTCMonth()];
    const year = now.getUTCFullYear();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');

    return `${dayName}, ${day} ${monthName} ${year} ${hours}:${minutes}:${seconds} +0000`;
}

export const processRequest = async (name) => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        console.log("start")
        await delay(1000); // Delay for 10 seconds
        console.log("end")
        return `# ${name}\nThis file is for language: ${name}`;
};
 

export const markdownToJSON = async (markdown: string): Record<string, any> => {
    const result: Record<string, any> = {};
    const lines = markdown.split("\n"); // Break the content into individual lines
  
    // Regular expressions for metadata and headings
    const metadataRegex = /^---\n([\s\S]*?)\n---/;
    const headingRegex = /^##\s+(.+)$/;
  
    let inMetadata = false;
    let metadataParsed = false;
  
    // Data holders
    let currentSection = "";
    let sections: Record<string, string> = {};
    let firstFigureLine = ""; // Hold the first figure tag
    let figureFound = false; // Track if the first figure has been encountered
  
    // Parse the markdown line by line
    for (const line of lines) {
      // Detect metadata block
      if (!metadataParsed && line === "---") {
        inMetadata = !inMetadata;
        if (!inMetadata) metadataParsed = true; // End of metadata
        continue;
      }
  
      // Parse metadata
      if (inMetadata) {
        const [key, ...valueParts] = line.split(":");
        if (!result.metadata) result.metadata = {};
        if (key && valueParts) {
          result.metadata[key.trim()] = valueParts.join(":").trim().replace(/^"(.*)"$/, "$1");
        }
        continue;
      }
  
      // Detect and handle the "{{< figure ... >}}" syntax
      if (/^\{\{< figure .+ ?>\}\}$/.test(line)) { 
        if (!figureFound) {
            firstFigureLine = line; // Store the first figure line
            figureFound = true; // Mark as found
            continue; // Skip this line for now
        }
        // For other figure tags, treat them as part of the content
        if (currentSection) {
            sections[currentSection] += line + "\n";
        }
        continue;
    }
    
  
      // Detect headings and set up a new section
      const headingMatch = line.match(headingRegex);
    
      if (headingMatch) {
        currentSection = headingMatch[1].trim();
        sections[currentSection] = ""; // Start a new section
        continue;
      }
  
      // Add lines to the current section's content
      if (currentSection) {
        sections[currentSection] += line + "\n";
      }
    }
  
    // Build the result object
    result.metadata = result.metadata || {};
    result.firstFigure = firstFigureLine || null; // Store only the first figure line
    result.sections = sections; // Replace content with sections object
  
    // Trim all section contents
    for (const key in sections) {
      sections[key] = sections[key].trim();
    }
  
    return result;
  };
  
  


  export const jsonToMarkdown = async (json: Record<string, any>): string => {
    let markdown = "";
  
    // Add metadata section to Markdown
    if (json.metadata) {
      markdown += "---\n";
      for (const [key, value] of Object.entries(json.metadata)) {
        markdown += `${key}: ${value}\n`;
      }
      markdown += "---\n\n";
    }
  
    // Add firstFigure property if it exists
    if (json.firstFigure) {
      markdown += `${json.firstFigure}\n\n`;
    }
  
    // Add heading sections to Markdown
    if (json.sections) {
      for (const [sectionTitle, content] of Object.entries(json.sections)) {
        markdown += `## ${sectionTitle}\n\n`;
        markdown += content ? `${content}\n\n` : "\n";
      }
    }
  
    return markdown.trim();
  };
  

  export const createMDFile = async (markdown,uuid)=> {
    try {
        if (!(await checkIfExists(path.join(`${process.cwd()}/public/blog-posts`, uuid))))
            await fs.mkdir(path.join(`${process.cwd()}/public/blog-posts`,uuid));

        await fs.writeFile(`${process.cwd()}/public/blog-posts/${uuid}/index.md`, markdown);
        console.log("optimized file created");
        return true;
    } catch(e) {
        console.log("optimized file creation failed");
        return false
    }
  }