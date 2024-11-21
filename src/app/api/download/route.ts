import path from 'path';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from "next";
import archiver from 'archiver';
import { getDirectoryName } from "@/utils/utils";
import { NextResponse } from 'next/server'

export async function GET(req) {
  let folderPath;
  if(req.headers.get('userIdForTrans'))
    folderPath = path.join(process.cwd(), `public/blog-posts/${req.headers.get('userIdForTrans')}`);
  else folderPath =  path.join(process.cwd(), `public/blog-posts/${req.headers.get('uuid')}/${req.headers.get('directoryName')}`);
  const stream = new ReadableStream({
    start(controller) {
      const archive = archiver('zip', {
        zlib: { level: 9 }, // Sets the compression level
      });

      // Handle any errors during the archiving process
      archive.on('error', (err) => {
        console.error('Error creating archive:', err);
        controller.error(new Error('Error creating archive'));
      });

      // Finalize the archive when done
      archive.on('finish', () => {
        controller.close();
      });

      // Push archive data to the stream
      archive.on('data', (chunk) => {
        controller.enqueue(chunk);
      });

      // Append the directory contents
      archive.directory(folderPath, false);

      // Finalize the archive
      archive.finalize();
    },
  });

  // Create a new response with the stream
  return new Response(stream);
}