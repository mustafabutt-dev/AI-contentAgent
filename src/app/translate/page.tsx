'use client';

import { fileDownloader } from "@/utils/fileDownloader";
import DropZone from '@/app/components/DropZone';
import Dropdown from "@/components/dropDown";
import {useState} from 'react'
import { useAppContext } from "../context/dropzon";
import DropdownWithCheckboxes from "@/components/dropdownWithCheckBoxes";
export default function Translate() {
  const [showDropZone, setShowDropZone] = useState(false);
  const [showLangDrop, setAShowLangDrop] = useState(false);
  const {AIModel,setAIModel, setSelectedLang} = useAppContext();

  
  const model = [
    { value: 'gpt-4o-mini (recommended)', label: 'gpt-4o-mini' },
    { value: 'Mixtral', label: 'Mixtral' }
  ];
  const handleDropdownChangeForModel = (value) => {
    setAIModel(value);
    setAShowLangDrop(true)
  };
  const languages = [
    { value: 'ar', label: 'Arabic' },
    { value: 'cs', label: 'Czech' },
    { value: 'de', label: 'German' },
    { value: 'es', label: 'Spanish' },
    { value: 'fa', label: 'Persian' },
    { value: 'fr', label: 'French' },
    { value: 'he', label: 'Hebrew' },
    { value: 'id', label: 'Indonesian' },
    { value: 'it', label: 'Italian' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ko', label: 'Korea' },
    { value: 'pl', label: 'Polish' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'ru', label: 'Russia' },
    { value: 'th', label: 'Thai' },
    { value: 'tr', label: 'Turkish' },
    { value: 'uk', label: 'Ukrainian' },
    { value: 'vi', label: 'Vietnamese' },
    { value: 'zh', label: 'Chinese (Simplified)' },
    { value: 'zh-hant', label: 'Chinese (Traditional)' },
    {value: 'sv', label: 'Swedish'}
  ];
  const handleDropdownChange = (selected) => {
    setSelectedLang(selected);
    setShowDropZone(true);
  };

  return (

    <div className="w-full max-w-2xl mx-auto flex flex-col min-h-screen items-center justify-start pt-12 space-y-4">
  {/* Model Selection */}
  <div className="w-full flex flex-col items-start">
    <Dropdown
      name="model"
      label="Select a Model"
      options={model}
      onChange={handleDropdownChangeForModel}
      className="w-full"
    />
  </div>

  {/* Language Selection */}
  {showLangDrop && (
    <div className="w-full flex flex-col items-start">
    <DropdownWithCheckboxes
      name="languages"
      options={languages}
      label="Select Languages"
      onChange={handleDropdownChange}
      className="w-full"
      parent = {"translate"}
    />
  </div>
  )}

  {/* DropZone (Shown Only If AIModel is Selected) */}
  {showDropZone && (
    <div className="w-full flex flex-col items-center">
      <DropZone />
    </div>
  )}
</div>


  );
}