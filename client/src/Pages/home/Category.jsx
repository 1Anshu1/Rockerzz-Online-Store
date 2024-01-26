import React from 'react'
import { useNavigate } from 'react-router-dom'

const Category = ({ categories }) => {

    const naviagte = useNavigate();

    return (
        <div className='flex flex-wrap gap-5 my-10'>
            {categories?.map((category) => (
                <div key={category.id} onClick={() => naviagte(`/category/${category.id}`)} className="cursor-pointer overflow-hidden w-[calc(50%-20px)] md:w-[calc(25%-20px)] " >
                    <img src={import.meta.env.VITE_BASE_URL + category.attributes.img.data.attributes.url} alt="" className="transition ease delay-100 hover:scale-125" />
                </div>
            ))
            }

        </div >
    )
}

export default Category
