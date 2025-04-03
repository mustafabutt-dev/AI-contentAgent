'use client'
import {React,useContext, useEffect,useState, useRef} from 'react'
import { InvokeOpenAI } from '@/actions/actions';
import Dropdown from '@/app/components/dropDown';
import { useFormStatus } from "react-dom";
import { v4 as uuidv4 } from 'uuid';
import { getDirectoryName } from '@/utils/utils';
import Link from 'next/link'

const BlogPostGenerator = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [products, setProducts] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const [product, setProduct] = useState('');
  const [title, setTitle] = useState('');
  const [primaryKeyword, setPrimaryKeyword] = useState('');
  const [secondaryKeywords, setSecondaryKeywords] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [AImodel, setAIModel] = useState('');
  const [temp, setTemp] = useState('');
  const [PostFormat, setPostFormat] = useState('');
  
  const temprature = [
    { value: '0.1', label: '0.1' },
    { value: '0.2', label: '0.2' },
    { value: '0.3', label: '0.3' },
    { value: '0.4', label: '0.4' },
    { value: '0.5', label: '0.5' },
    { value: '0.6', label: '0.6' },
    { value: '0.7', label: '0.7' },
    { value: '0.8', label: '0.8' },
    { value: '0.9', label: '0.9' },
    { value: '1.0', label: '1.0' },
  ];
  const model = [
    { value: 'gpt-4o', label: 'gpt-4o' },
    { value: 'gpt-4o-mini', label: 'gpt-4o-mini' },
    { value: 'gpt-4', label: 'gpt-4' },
    { value: 'Mixtral', label: 'Mixtral' },
    { value: 'DeepSeek R1', label: 'DeepSeek R1' }
    
  ];

  const format = [
    { value: 'Free flowing', label: 'Free fllowing' },
    { value: 'Table of content(TOC)-based', label: 'Table of content(TOC)-based' }
  ];
  function handleClick(){
    if(product && title && primaryKeyword && secondaryKeywords && authorName && AImodel && temp && PostFormat)
      setLoading(true);
    (async()=>{
      let directoryName = await getDirectoryName(inputRef.current.value);
      localStorage.setItem('directoryName', directoryName);
    })()
 
  }
  const handleDropdownChangeForProduct = (value) => {
    setProduct(value);
  };
  const handleDropdownChangeForModel = (value) => {
    setAIModel(value);
  };
  const handleDropdownChangeForTemp = (value) => {
    setTemp(value);
  };
  const handleDropdownChangeForFormat = (value) => {
    setPostFormat(value);
  };
  
  useEffect(()=>{
    localStorage.setItem('userId', uuidv4());
    (async()=>{
      let productsResp = await fetch('/data.json');
      const data = await productsResp.json();
      localStorage.removeItem('userIdForTrans')
      setProducts(data);
    })()
  },[])
  
  if(!products)
    return null 

  return (
    <>
      {/* <Link href="/">
        <button className="float-left text-white font-bold py-1 px-1 rounded-full shadow-md bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-[length:400%_400%] animate-spin-slow">
          <span class="mr-2">&#8592; Back</span>
        </button>
      </Link> */}

      <div className="flex min-h-screen justify-center items-center">
        
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-4xl font-bold mb-6 text-black text-center">Create Blog Post</h2>
          <style jsx>{`
          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }

          .loader {
            border: 4px solid #f3f3f3;
            border-radius: 50%;
            border-top: 4px solid #3498db;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          form {
            position: relative;
            z-index: 1; /* Keeps form under the overlay when loading */
          }
        `}</style>

          {loading && (
            <div className="overlay">
              <div className="loader"></div>
            </div>
          )}
          <form action={InvokeOpenAI} >

            {/* Dropdowns */}
            <div className="mb-4">
              <Dropdown
                name="products"
                label="Select a Product"
                options={products}
                onChange={handleDropdownChangeForProduct}
              />
            </div>

            {/* Title */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
                Title
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                required
                ref={inputRef}
                name="title"
                type="text"
                placeholder="e.g. Convert HTM"
                className="w-full px-4 py-2 text-black border border-dark-800 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Primary Keyword */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="primaryKeyword">
                Primary Keyword
              </label>
              <input
                onChange={(e) => setPrimaryKeyword(e.target.value)}
                required
                name="primaryKeyword"
                type="text"
                placeholder="Enter primary keyword"
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Secondary Keywords */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="secondaryKeywords">
                Secondary Keywords
              </label>
              <input
                onChange={(e) => setSecondaryKeywords(e.target.value)}
                required
                name="secondaryKeywords"
                type="text"
                placeholder="Enter comma-separated secondary keywords"
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Online Tool Link */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="onlineTool">
                Online Tool Link (optional)
              </label>
              <input
                name="onlineTool"
                type="text"
                placeholder="Enter online tool link"
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Auther */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="additionalInstructions">
                Author Name
              </label>
              <input
                onChange={(e) => setAuthorName(e.target.value)}
                required
                name="authorName"
                placeholder="Enter auther name"
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
            <Dropdown
                name ="model"
                label="Select a Model"
                options={model}
                onChange={handleDropdownChangeForModel}
              />
            </div>

            {/* Token Limit */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="tokenLimit">
                Token Limit
              </label>
              <input
                required
                name="tokenLimit"
                type="number"
                placeholder="e.g. 1500"
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
            <Dropdown
                name ="temprature"
                label="Select Temprature (recommended 0.3)"
                options={temprature}
                onChange={handleDropdownChangeForTemp}
              />
            </div>

            <div className="mb-4">
            <Dropdown
                name ="format"
                label="Select Blog Post Format"
                options={format}
                onChange={handleDropdownChangeForFormat}
              />
            </div>

            {/* Additional Instructions */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="additionalInstructions">
                Additional Instructions (optional)
              </label>
              <textarea
                name="additionalInstructions"
                placeholder="Enter any additional instructions"
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
                name="uuid"
                type="text"
                value={localStorage.getItem('userId')}
                placeholder="e.g. 1500"
                className="hidden"
              />
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
};

export default BlogPostGenerator;