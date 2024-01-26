import { createContext, useState } from "react";
import { useLocation } from 'react-router-dom'

export const Context = createContext()

const AppContext = ({ children }) => {

    const [categories, setCategories] = useState()
    const [products, setProducts] = useState()
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartSubtotal, setCartSubtotal] = useState(0)
    const location = useLocation()

    const handleAddtoCart = (product, quantity) => {
        let items = [...cartItems]
        let idx = items.findIndex((p) => p.img.data[0].id === product.img.data[0].id)
        if (idx === -1) {
            product.quantity = quantity
            items = [...items, product]
        } else {
            items[idx].quantity += quantity
        }
        setCartItems(items)
    }
    const handleRemoveFromCart = (product) => {
        let items = [...cartItems]
        items = items.filter((item) => item.img.data[0].id != product.img.data[0].id)
        setCartItems(items)
    }
    const handleProductQuantity = (type, product) => {
        let items = [...cartItems]
        let idx = items.findIndex((p) => p.img.data[0].id === product.img.data[0].id)
        if (type === 'decr' && items[idx].quantity > 1) {
            items[idx].quantity -= 1
        } else if (type === 'incr') {
            items[idx].quantity += 1
        }

        setCartItems(items)
    }

    return (
        <Context.Provider value={{
            categories,
            setCategories,
            products,
            setProducts,
            cartItems,
            setCartItems,
            cartCount,
            setCartCount,
            cartSubtotal,
            setCartSubtotal,
            handleAddtoCart,
            handleRemoveFromCart,
            handleProductQuantity
        }}>
            {children}
        </Context.Provider >
    )
}

export default AppContext