import React from 'react'
import ProductCard from '../../components/ProductCard'

const Products = ({ title, products }) => {
    return (
        <div className=' my-20'>
            <h1 className='text-3xl mb-4'>{title} Product</h1>
            <div className="flex flex-wrap gap-5 ">
                {
                    products?.map((product) => (
                        <ProductCard key={product.id} id={product.id} product={product} />

                    ))
                }
            </div>
        </div>
    )
}

export default Products
