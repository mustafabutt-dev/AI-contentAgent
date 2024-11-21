'use client';

import { fileDownloader } from "@/utils/fileDownloader";
import Translator from '@/components/translator';
export default function Translate() {
    
  return (
    <div className="w-full max-w-2xl mx-auto stretch">
        <Translator />
    </div>
  );
}