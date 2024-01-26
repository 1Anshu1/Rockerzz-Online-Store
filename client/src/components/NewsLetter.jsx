import React from 'react'
import { IoLogoLinkedin, IoLogoTwitter, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

const NewsLetter = () => {
    return (
        <div className='bg-[url("../../src/assets/newsletter-bg.jpeg")] bg-no-repeat flex flex-col justify-center items-center gap-5 p-10' >
            <span>NEWSLETTER</span>
            <span className='font-extrabold text-sm md:text-2xl'>SIGN UP FOR LATEST UPDATES AND OFFERS</span>
            <div className="flex flex-nowrap">
                <input type="text" placeholder='Enter Email' className="px-2 py-2 rounded-sm outline-none border-2 mx-3 border-gray-500" />
                <button className="bg-purple-700 text-white px-5 py-2 rounded-sm">Subscribe</button>
            </div>
            <span className='text-sm'>Will be used in accordance with our Privacy Policy</span>
            <div className="flex gap-2">
                <div className="bg-black rounded-full p-1">
                    <IoLogoFacebook className='text-white' />
                </div>
                <div className="bg-black rounded-full p-1">
                    <IoLogoInstagram className='text-white' />
                </div>
                <div className="bg-black rounded-full p-1">
                    <IoLogoTwitter className='text-white' />
                </div>
                <div className="bg-black rounded-full p-1">
                    <IoLogoLinkedin className='text-white' />
                </div>
            </div>
        </div >
    )
}

export default NewsLetter
