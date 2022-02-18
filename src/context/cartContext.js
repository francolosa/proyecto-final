import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export default function CartContextProvider ({children}) {
    const [cart, setCart] = useState([])
    
    const addToCart = (cantidad, item) => {
        setCart(cantidad, item)
        setCart([...cart, {...item, cantidad}])
        console.log(cart);
    }


    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}