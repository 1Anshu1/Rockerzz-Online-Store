import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaIndianRupeeSign } from "react-icons/fa6";
import earbuds from '../assets/products/earbuds-prod-1.webp'

const ProductCard = ({ product }) => {

    const navigate = useNavigate();

    return (
        <div className='w-[calc(50%-20px)] md:w-[calc(25%-20px)] cursor-pointer' onClick={() => navigate(`/product/${product.attributes.img.data[0].id}`)}>
            <div className="bg-gray-200 w-[100%] overflow-hidden">
                <img src={import.meta.env.VITE_BASE_URL + product.attributes.img.data[0].attributes.url} alt="" className='object-cover transition ease delay-100 hover:scale-110' />
            </div>
            <div className="">
                <div className="truncate font-bold">{product.attributes.title}.</div>
                <span className="font-extrabold flex items-center"><FaIndianRupeeSign />{product.attributes.price}</span>
            </div>
        </div>
    )
}

export default ProductCard
