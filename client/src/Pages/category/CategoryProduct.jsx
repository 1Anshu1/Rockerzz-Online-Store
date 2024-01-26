import React, { useContext, useEffect } from 'react'

import ProductCard from '../../components/ProductCard'
import ContentWrapper from '../../components/ContentWrapper'
import { Context } from '../../utils/Context'
import { useParams } from 'react-router-dom'

const CategoryProduct = ({ }) => {

    const { categories, products } = useContext(Context)
    const { id } = useParams();

    const product = products.filter((item) => (item.attributes.categories.data[0].id === categories[id - 1].id))

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='my-10'>
            <ContentWrapper>
                <h1 className='text-3xl my-4'>{categories[id - 1].attributes.title}</h1>
                <div className="flex flex-wrap gap-5 ">
                    {
                        product.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))
                    }
                </div>
            </ContentWrapper>
        </div>
    )
}

export default CategoryProduct
