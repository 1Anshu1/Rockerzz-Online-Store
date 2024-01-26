import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";

const Footer = () => {
    return (
        <div className='flex flex-col justify-around p-10 md:flex-row md:justify-around '>
            <div className="flex-[1] px-2 mb-5 md:px-8">
                <h1 className="font-extrabold text-2xl mb-3">About</h1>
                <div className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, pariatur.</div>
            </div>
            <div className="flex-[1] px-2 mb-5 md:px-8">
                <h1 className="font-extrabold text-2xl mb-3">Contact</h1>

                <div className='flex items-center gap-2'>
                    <FaLocationArrow />
                    <span>M.G Road, Bengaluru, Karnataka, 540105</span>
                </div>
                <div className="flex items-center gap-2">
                    <CiMobile2 />
                    <span>Phone: +91-7383838485</span>
                </div>
                <div className='flex items-center gap-2'>
                    <MdOutlineEmail />
                    <span>Email: rockerzz@email.com</span>
                </div>

            </div>
            <div className="flex justify-between flex-[1] px-2 mb-5 md:px-8">
                <div className="pr-3">
                    <div className="font-extrabold text-2xl mb-3">Categories</div>
                    <ul className="">
                        <li className="">HeadPhones</li>
                        <li className="">Smart Watches</li>
                        <li className="">Bluetooth Speaker</li>
                        <li className="">Wireless Earbud</li>
                        <li className="">Home Theater</li>
                        <li className="">Projectors</li>
                    </ul>
                </div>
                <div className="">
                    <div className="font-extrabold text-2xl mb-3">Pages</div>
                    <ul className="">
                        <li className="">Home</li>
                        <li className="">About</li>
                        <li className="">Privacy Policy</li>
                        <li className="">Returns</li>
                        <li className="">Terms & Conditions</li>
                        <li className="">Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
