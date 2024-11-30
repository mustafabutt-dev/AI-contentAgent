
'use server'

import { promises as fs } from 'fs';

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
