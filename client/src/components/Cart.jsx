import React, { useContext, useEffect } from 'react'
import { IoMdClose } from "react-icons/io";
import { BsCartX } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";

import { Context } from '../utils/Context';



const Cart = ({ setShowCart }) => {


    const { cartItems, cartSubtotal, setCartSubtotal, handleRemoveFromCart, handleProductQuantity } = useContext(Context)

    useEffect(() => {
        let subTotal = 0;
        cartItems.map((item) => subTotal += item.price * item.quantity)
        setCartSubtotal(subTotal)
    }, [cartItems, setCartSubtotal])


    return (
        <div className='w-[100vw] md:w-[350px] absolute h-[100vh] bg-white top-0 right-0 scroll-m-0 z-20'>
            <div className="flex justify-between items-center border-2 border-gray-100 text-black p-3">
                <h1 className='font-bold'>Shopping Cart</h1>
                <IoMdClose className='cursor-pointer' onClick={() => setShowCart(false)} />
            </div>


            {(cartItems.length === 0) &&
                <div className="flex items-center justify-center h-[calc(100vh-100px)]">
                    <div className='text-center'>
                        <BsCartX className='text-8xl text-gray-200' />
                        <div className='font-bold text-black my-3'>No Products In the cart.</div>
                        <button className="bg-purple-600 py-2 px-3 text-white">Return To Shop</button>
                    </div>
                </div>
            }


            {cartItems.length > 0 &&
                cartItems.map((item, idx) => (
                    <div key={idx} className='flex flex-wrap gap-2 my-2 p-2 flex-row'>
                        <div className="bg-gray-200 w-10 md:w-12 h-12 ">
                            <img src={import.meta.env.VITE_BASE_URL + item.img.data[0].attributes.url} alt="" />
                        </div>
                        <div className="w-[calc(75%-10px)]">
                            <div className="font-extrabold text-sm truncate">{item.title}</div>
                            <div className="flex items-center my-1">
                                <div className="flex mr-3">
                                    <div className="border-y-2 border-x-2 border-gray-500  px-2 cursor-pointer h-7" onClick={() => handleProductQuantity('decr', item)}> - </div>
                                    <div className="border-y-2 border-gray-500 px-3 h-7"> {item.quantity} </div>
                                    <div className="border-y-2 border-x-2 border-gray-500 px-2 h-7 cursor-pointer" onClick={() => handleProductQuantity('incr', item)}> + </div>
                                </div>
                                <div className="flex items-center font-bold my-2 text-purple-600">{item.quantity} x  <FaIndianRupeeSign />{item.price}</div>

                            </div>
                        </div>
                        <IoMdClose className='cursor-pointer' onClick={() => handleRemoveFromCart(item)} />
                    </div>

                ))
            }


            <div className="p-2 absolute bottom-0 w-[inherit]">
                <div className="flex justify-between items-center border-y-2 border-gray-100 text-black">
                    <div className="">SUBTOTAL: </div>
                    <div className="flex items-center font-bold my-2 text-purple-600"> <FaIndianRupeeSign />{cartSubtotal}</div>
                </div>
                <button className='bg-purple-600 text-white w-[100%] font-bold py-3 px-5'>CHECKOUT</button>
            </div>
        </div>
    )
}

export default Cart
