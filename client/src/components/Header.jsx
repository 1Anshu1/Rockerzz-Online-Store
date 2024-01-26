import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import ContentWrapper from './ContentWrapper'

import Cart from './Cart';
import SearchBar from './SearchBar';
import { Context } from '../utils/Context';

const Header = () => {

    const [showCart, setShowCart] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const navigate = useNavigate()
    const { cartCount, setCartCount, cartItems } = useContext(Context)

    useEffect(() => {
        let count = 0;
        cartItems.map((item) => count += item.quantity)
        setCartCount(count)
    }, [cartItems])


    return (
        <>
            <div className='bg-black text-white w-[100%] sticky top-0 z-10'>
                <ContentWrapper>
                    <div className=' flex justify-between items-center px-2 py-2 md:px-10'>
                        <div className='text-2xl cursor-pointer md:text-4xl' onClick={() => navigate('/')}>Rockerzz Store</div>
                        <ul className=' hidden md:flex justify-between items-center gap-5 list-none uppercase '>
                            <li className='cursor-pointer hover:opacity-50' onClick={() => navigate('/')}>Home</li>
                            <li className='cursor-pointer hover:opacity-50'>About</li>
                            <li className='cursor-pointer hover:opacity-50'>Categories</li>
                        </ul>
                        <div className='flex justify-between items-center gap-5'>
                            <IoIosSearch className='cursor-pointer' onClick={() => setShowSearch(true)} />
                            <FaRegHeart className='cursor-pointer' />
                            <span className='relative' >
                                <MdOutlineShoppingCart className='cursor-pointer' onClick={() => setShowCart(true)} />
                                {cartCount > 0 && <span className='absolute bottom-2 left-3 rounded-full flex justify-center items-center bg-purple-800 p-1 text-[10px] h-4 w-4
                            '>{cartCount}</span>}
                            </span>
                        </div>
                    </div>
                </ContentWrapper >
            </div >
            {showSearch && <SearchBar setShowSearch={setShowSearch} />}
            {showCart && <Cart setShowCart={setShowCart} />}
        </>
    )
}

export default Header
