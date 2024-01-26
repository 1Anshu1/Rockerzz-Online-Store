import React, { useEffect, useContext } from 'react'

import Banner from './Banner'

import Category from './Category'
import Products from './Products'
import ContentWrapper from '../../components/ContentWrapper'

import { fetchDataFromApi } from '../../utils/api.js'
import { Context } from '../../utils/Context.jsx'



const Home = () => {

    const { categories, setCategories } = useContext(Context)
    const { products, setProducts } = useContext(Context)

    const getCategory = () => {
        fetchDataFromApi('/api/categories?populate=*')
            .then((res) => setCategories(res.data));

        fetchDataFromApi('/api/products?populate=*')
            .then((res) => setProducts(res.data))
    }

    useEffect(() => {
        getCategory();
    }, [])


    return (
        <div>
            <Banner />
            <ContentWrapper >
                <Category categories={categories} />
                <Products title={'Popular'} products={products} />
            </ContentWrapper>
        </div>
    )
}

export default Home
