import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoLogoLinkedin, IoLogoTwitter, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

import Products from '../Pages/home/Products';
import ContentWrapper from './ContentWrapper';
import { Context } from '../utils/Context';

const SingleProduct = () => {

    const [count, setCount] = useState(1)
    const decrement = () => (count > 1 ? setCount(prev => prev - 1) : setCount(1))
    const increment = () => (count < 6 ? setCount(prev => prev + 1) : setCount(6))

    const { id } = useParams()
    const { products, handleAddtoCart } = useContext(Context)

    const singleProduct = products.filter((item) => item.attributes.img.data[0].id == id)

    const relatedproducts = products.filter((item) => {
        return (item.attributes.img.data[0].id != id && singleProduct[0].attributes.categories.data[0].attributes.title === item.attributes.categories.data[0].attributes.title)
    })

    const pr = singleProduct[0].attributes
    // console.log(pr)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);


    return (
        <ContentWrapper>
            <div className='flex flex-col flex-wrap gap-5 my-10 md:flex-row'>
                <div className="bg-gray-200 md:w-[calc(50%-20px)] ">
                    <img src={import.meta.env.VITE_BASE_URL + singleProduct[0].attributes.img.data[0].attributes.url} alt="" />
                </div>
                <div className="md:w-[calc(50%-20px)]">
                    <div className="font-extrabold text-2xl">{singleProduct[0].attributes.title}</div>
                    <div className="flex items-center font-bold my-2"><FaIndianRupeeSign />{singleProduct[0].attributes.price}</div>
                    <div className="text-gray-500">
                        {singleProduct[0].attributes.desc}
                    </div>
                    <div className="flex my-5">
                        <div className="flex mr-3">
                            <div className="border-y-2 border-x-2 border-gray-500 py-1 px-3 cursor-pointer" onClick={decrement}> - </div>
                            <div className="border-y-2 border-gray-500 py-1 px-4"> {count} </div>
                            <div className="border-y-2 border-x-2 border-gray-500 py-1 px-3 cursor-pointer" onClick={increment}> + </div>
                        </div>
                        <button className="flex items-center bg-purple-600 text-white px-3 cursor-pointer" onClick={() => handleAddtoCart(pr, count)}><MdOutlineShoppingCart />Add to Cart</button>

                    </div>
                    <div className="font-bold">Category: <span className='text-gray-500'>{singleProduct[0].attributes.categories.data[0].attributes.title}</span></div>
                    <div className="font-bold flex items-center gap-2">Share:
                        <IoLogoFacebook className='cursor-pointer' />
                        <IoLogoInstagram className='cursor-pointer' />
                        <IoLogoLinkedin className='cursor-pointer' />
                        <IoLogoTwitter className='cursor-pointer' />
                    </div>
                </div>

            </div>
            <Products title={'Related'} products={relatedproducts} />

        </ContentWrapper>
    )
}

export default SingleProduct
