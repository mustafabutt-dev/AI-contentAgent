'use client';

import { fileDownloader } from "@/utils/fileDownloader";
import BlogPostGenerator from '@/components/BlogGenerator';
export default function Generate() {
    
  return (
    <div className="w-full max-w-2xl mx-auto stretch">
        <BlogPostGenerator />
    </div>
  );
}