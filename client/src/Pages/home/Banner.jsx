import React from 'react'

import bannerImg from '../../assets/banner-img.png'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse justify-around  bg-gradient-to-r from-purple-600 to-blue-900 md:flex-row items-center px-40px h-[100vh]'>
            <div className="text-white flex flex-col justify-center items-center px-2 md:w-[50%]">
                <div className='text-6xl font-extrabold tracking-wide md:text-8xl '>SALES</div>
                <div className='text-center md:w-[50%] '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil voluptatum repellendus id hic corporis nam autem optio maiores. Doloribus, fuga!</div>
                <div className="my-5">
                    <button className="border-2 border-white py-2 px-5 rounded-sm mx-5">READ MORE</button>
                    <button className="border-2 border-white bg-white py-2 px-5 text-purple-800 rounded-sm">SHOP NOW</button>
                </div>
            </div>
            <img src={bannerImg} alt="" className='w-[300px] h-[300px]   md:w-[600px] md:h-[500px] object-fill' />

        </div>
    )
}

export default Banner
