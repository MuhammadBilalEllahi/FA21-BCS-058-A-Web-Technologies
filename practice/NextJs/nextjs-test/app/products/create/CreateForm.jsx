"use client" //now this is client js

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

// This function was created to solce circular reference problem but later on it was resolved by corrected Product Json
// function stringify(obj) {
//     let cache = [];
//     let str = JSON.stringify(obj, function(key, value) {
//       if (typeof value === "object" && value !== null) {
//         if (cache.indexOf(value) !== -1) {
//           // Circular reference found, discard key
//           return;
//         }
//         // Store value in our collection
//         cache.push(value);
//       }
//       return value;
//     });
//     cache = null; // reset the cache
//     return str;
//   }

export default function CreateForm() {
    const router = useRouter()


    const [p_img, setPimg] = useState('')
    const [p_img_on_error, setPimg_on_error] = useState('')
    const [p_name, setPname] = useState('')
    const [p_orig_price, setPorig_price] = useState('')
    const [p_sale_price, setPsale_price] = useState('')
    const [isloading, setIsLoading] = useState(false)


    const handleSubmision = async (e) => {

        e.preventDefault()
        setIsLoading(true)




        const product = {
            
            p_img: {
                // data: Buffer.from("../public/product-2-600x655.jpg", "base64"),
                data: Buffer.from("/product-9-1-600x655.jpg", "base64"),
                contentType: "image/jpeg"
            },
            p_img_on_error: {
                data: Buffer.from("/product-9-1-600x655.jpg", "base64"),
                contentType: "image/jpeg"
            },

            p_name: p_name,
            p_orig_price: Number(p_orig_price),
            p_sale_price: Number(p_sale_price),
        }
       

        try {
            const res = await fetch("http://localhost:2211/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product)
            });

            if (res.status === 201) {
                router.refresh()
                router.push("/products");
                
            } else {
                console.error("Failed to submit product. Server responded with status:", res.status);
            }
        } catch (error) {
            console.error("Error submitting product:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmision} className='w-1/2 '>

            <div className=' flex-col flex'>
                <label>
                    <span>Product Name:</span>
                    <input
                        required
                        type="text"
                        onChange={(e) => setPname(e.target.value)}
                    />
                </label>


                <label>
                    <span>Product Orig Price:</span>
                    <input
                        required
                        type="number"
                        onChange={(e) => setPorig_price(e.target.value)}
                    />
                </label>



                <label>
                    <span>Product Sale Price</span>
                    <input
                        required
                        type="number"
                        onChange={(e) => setPsale_price(e.target.value)}
                    />
                </label>


                {/* <label>
            <span>Product Image</span>
            <input 
            required
            type="upload"
            onChange={(e)=>setPsale_price(e.target.value)}
            />
        </label> */}

                <button

                    className=' border bg-zinc-400 m-3 w-40'
                    // disabled={isloading}
                >
                    {isloading && <span>Adding...</span>}
                    {!isloading && <span>Add Product</span>}
                </button>

            </div>

        </form>
    )
}
