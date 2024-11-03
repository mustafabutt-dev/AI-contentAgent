
import { promises as fs } from 'fs';
import path from 'path';
import { Storage } from '@google-cloud/storage';
import { getDirectoryName, checkIfExists } from "@/utils/utils";

export const markdownFileGenertaor = async (content:string,uuid:string, title:string)=>{

  let dirName = await getDirectoryName(title);
  // Ensure the directory exists
  if (!(await checkIfExists(path.join(`${process.cwd()}/public`, 'blog-posts'))))
    await fs.mkdir(path.join(`${process.cwd()}/public`, 'blog-posts'));
  
  if (!(await checkIfExists(path.join(`${process.cwd()}/public/blog-posts`, uuid))))
    await fs.mkdir(path.join(`${process.cwd()}/public/blog-posts`,uuid ));
  
  if (!(await checkIfExists(path.join(`${process.cwd()}/public/blog-posts/${uuid}`, dirName))))
    await fs.mkdir(path.join(`${process.cwd()}/public/blog-posts/${uuid}`, dirName));

  if (!(await checkIfExists(  path.join(`${process.cwd()}/public/blog-posts/${uuid}/${dirName}`, 'images'))))
    await fs.mkdir(path.join(`${process.cwd()}/public/blog-posts/${uuid}/${dirName}`, 'images'));

  // Define the file path
  const filePath = `${process.cwd()}/public/blog-posts/${uuid}/${dirName}/index.md`

  try {
    console.log("now writting File");
    // Write file
    await fs.writeFile(filePath, content);
    console.log("File written successfully");

  } catch (err) {
    console.error('Error:', err);
  }
   
}





