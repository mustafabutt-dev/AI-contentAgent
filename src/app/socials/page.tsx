'use client';

import { fileDownloader } from "@/utils/fileDownloader";
import DropZone from '@/app/components/DropZone';
import { useAppContext } from "../context/dropzon";
import { useRef, useState } from "react";
import { makeServerCall } from '@/actions/actions';
import Dropdown from '@/app/components/dropDown';
import DropdownWithCheckboxes from "@/components/dropdownWithCheckBoxes";
import Image from 'next/image';

export default function Optimize() {
  const [tone, setTone] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [articleURL, setArticleURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [socialPlatform, setSocialPlatform] = useState('');
  const [message, setMessage] = useState(false);
  const [dropdownKey, setDropdownKey] = useState(0);
  const [fbSuccessStatus, setFbSuccessStatus] = useState(false);
  const [lkSuccessStatus, setLkSuccessStatus] = useState(false);

  const [fbFailedStatus, setFbFailedStatus] = useState(false);
  const [lkFailedSuccessStatus, setLkFailedSuccessStatus] = useState(false);

  const [xFailedStatus, setXFailedStatus] = useState(false);
  const [xSuccessStatus, setXSuccessStatus] = useState(false);

  const handleClick = ()=>{
    if(!socialPlatform)
      setShowError(true)
    if(tone && targetAudience && articleURL && socialPlatform)
      setLoading(true); 
  }
  async function handleServerFunction(formData: FormData)  {
    const result = await makeServerCall(formData);

    for (let i = 0; i < result.length; i++) {
      const post = result[i];
    
      if (post.platform === "facebook") {
        if (post.success) 
          setFbSuccessStatus(true);
        else setFbFailedStatus(true);
      }
    
      if (post.platform === "linkedin") {
        if (post.success) 
          setLkSuccessStatus(true);
        else setLkFailedSuccessStatus(true);
      }

      if (post.platform === "x") {
        if (post.success) 
          setXSuccessStatus(true);
        else setXFailedStatus(true);
      }
    }
    
      setLoading(false); 
      setMessage(true); 
      setArticleURL('');
      setDropdownKey(prev => prev + 1);
      setShowError(false);
      setTimeout(()=>{ 
         setMessage(false); 
         setFbSuccessStatus(false)
         setFbFailedStatus(false)
         setLkSuccessStatus(false);
         setLkFailedSuccessStatus(false);
         setXFailedStatus(false);
         setXSuccessStatus(false);
      },4000)
    
  }
  const handleDropdownChangeForTone = (value) => {
    setTone(value);
  };
  const handleDropdownChangeForAudience = (value) => {
    setTargetAudience(value);
  };
  const handleDropdownPlatform = (value) => {
    setShowError(false);
    setSocialPlatform(value);
  };
  const mood = [
    { value: 'Formal', label: 'Formal' },
    { value: 'Creative', label: 'Formal' },
    { value: 'Fun', label: 'Fun' },
    { value: 'Curious', label: 'Curious' },
    { value: 'Narrative', label: 'Narrative' },
  ];

  const audience = [
    { value: 'Entrepreneurs', label: 'Entrepreneurs' },
    { value: 'Software Developers', label: 'Software Developers' },
    { value: 'Gamers', label: 'Gamers' },
    { value: 'Students', label: 'Students' },
    { value: 'Researchers', label: 'Researcher' }
  ];
  const plateform = [
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'x', label: 'X' }
  ];
  
  return (   
  <>
     <div className="w-full max-w-2xl mx-auto flex flex-col min-h-screen items-center justify-start pt-12 space-y-4">
        
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">

          {(loading || message) && (
            <div className="overlay">
              {loading && !message && <div className="loader"></div>}
              {message && <div id="postStatusPopup" class="fixed top-5 right-5 bg-white border border-gray-200 shadow-xl rounded-2xl p-4 w-80 z-50">
                <h2 class="text-lg font-semibold mb-3">Post Status</h2>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    
                    {!fbFailedStatus && !fbSuccessStatus? null:<span class="text-blue-600 font-medium mr-2"><Image src={`/images/facebook.png`} alt="Banner" width={20} height={20} priority /></span>}
                    {fbSuccessStatus? <span class="text-green-600 font-bold">✅ Posted successfully</span>: null} {fbFailedStatus? <span class="text-red-600 font-bold">❌ Failed to post</span>: null}
                  </li>

                  <li class="flex items-center">
             
                    {!lkFailedSuccessStatus && !lkSuccessStatus?null :<span class="text-blue-800 font-medium mr-2"><Image src={`/images/linkedin.png`} alt="Banner" width={20} height={20} priority /></span>}
                    {lkSuccessStatus? <span class="text-green-600 font-bold">✅ Posted successfully</span>: null} {lkFailedSuccessStatus? <span class="text-red-600 font-bold">❌ Failed to post</span>: null}
                  </li>

                  <li class="flex items-center">
             
                    {!xSuccessStatus && !xFailedStatus ? null :<span class="text-blue-800 font-medium mr-2"><Image src={`/images/x.png`} alt="Banner" width={20} height={20} priority /></span>}
                    {xSuccessStatus? <span class="text-green-600 font-bold">✅ Posted successfully</span>: null} {xFailedStatus? <span class="text-red-600 font-bold">❌ Failed to post</span>: null}
                  </li>
                </ul>
              </div>}
            </div>
          )}
          <form action={handleServerFunction} key={dropdownKey}>
            
            {/* Additional Instructions */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="url">
                <b>Enter Article URL</b>
              </label>
              <textarea
                onChange={(e) => setArticleURL(e.target.value)}
                value ={articleURL}
                name="url"
                placeholder="Enter URL of the blog post here."
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4" >
            <Dropdown
                name ="mood"
                label="Mood/Tone"
                options={mood}
                onChange={handleDropdownChangeForTone}
                value={tone}
              />
            </div>

            <div className="mb-4">
            <Dropdown
                name ="audience"
                label="Target Audience"
                options={audience}
                onChange={handleDropdownChangeForAudience}
                value={targetAudience}
              />
            </div>

            <div className="mb-4">
              <DropdownWithCheckboxes
                name="platforms"
                options={plateform}
                label="Platforms"
                onChange={handleDropdownPlatform}
                className="w-full"
                parent = {"socials"}
                value={socialPlatform}
              />
            </div>
            {showError ? <p className="text-red-600 text-sm mt-2">Please select at least one social platform.</p> :null}
            <input type="hidden" name="platforms" value={JSON.stringify(socialPlatform)} />
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
              onClick={handleClick}
            >
              Submit
            </button>
          </form>

        </div>
      </div>
  </>
  );
}