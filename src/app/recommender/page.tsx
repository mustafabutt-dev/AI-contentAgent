'use client';

import { useEffect, useState } from "react";
import Dropdown from '@/app/components/dropDown';
import { recommendNewTitle } from '@/actions/actions';

export default function Recommender() {
  const [products, setProducts] = useState<object>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<string>('');
  const [loader, setLoader] = useState(false);
  const [list, setList] = useState('');
  const [copiedTitle, setCopiedTitle] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTitle(text);
    setTimeout(() => setCopiedTitle(null), 2000); // reset after 2s
  };

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

    const handleDropdownChangeForProduct = (value) => {
        setProduct(JSON.parse(value));
    };
    const handleClick = ()=>{
        setLoader(true);
    }
    const handleServerFunction = async (formData: FormData)=>{

        const result = await recommendNewTitle(formData);
        
        if(result.success){
            setLoader(false);
            setList(result.list)
        }    
    }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col min-h-screen items-center justify-start pt-12 space-y-4">
        
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
            {loader && (
                <div className="overlay">
                    <div className="loader"></div>
                </div>
                
            )}

            {loading ? (
                        <p>Loading...</p>
                    ) : null ? (
                    <p className="text-red-500">{error}</p>
                    ) : products.length === 0 ? (
                    <p>No products found.</p>
                    ) : (
                    <>
                    <form action={handleServerFunction}>
                        <Dropdown
                            name="product"
                            label="Select a product"
                            options={products}
                            onChange={handleDropdownChangeForProduct}
                            isRecommend={true}
                        />

                        {product && ( 
                            <div className="flex justify-center mt-6">
                            <button
                            className=" w-90 text-white font-bold py-4 px-6 rounded-full shadow-md bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-[length:400%_400%] animate-spin-slow text-lg"
                            type="submit" onClick={handleClick}
                            >
                            Analyze & Reccommend
                            </button>
                        </div>
                        
                        )}
                    </form>
                    </>
                )}

              <div className="grid gap-4 mt-6">
              

                {list.length > 0 && (
                  <div className="grid gap-4 mt-6">
                    {list.map((title, i) => (
                      <div key={title}>
                        {i === 0 && (
                          <b className="block mb-2 text-gray-700">
                            Here are five potential topics for upcoming blog posts.
                          </b>
                        )}
                        <div className="bg-white p-4 rounded-xl shadow border border-gray-200 flex justify-between items-center">
                          <p className="text-gray-800 text-md font-medium">{title}</p>
                          <button
                            type="button"
                            onClick={() => handleCopy(title)}
                            className={`ml-4 px-3 py-1 text-sm rounded-md border ${
                              copiedTitle === title
                                ? 'border-green-500 text-green-600 bg-green-100'
                                : 'border-blue-500 text-yellow-600 hover:bg-yellow-100'
                            } transition duration-200`}
                          >
                            {copiedTitle === title ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
        </div>
    </div>
   
  );
}
