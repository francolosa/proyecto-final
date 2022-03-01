import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export default function CartContextProvider ({children}) {
    const [cart, setCart] = useState([])
    
    const addToCart = (cantidad, item) => {

        let contiene = false;
        for(var i=0;i<cart.length;i++){
            if(cart[i].id == item.id){
                contiene = true;
            } 
        }
        if(!contiene){
            setCart([...cart, {...item, cantidad}])
        }
        console.log(`Se agregaron al carrito ${cantidad} unidades del producto con ID: ${item.id}`)
        console.log("Ahora el carrito contiene:");

    }

    const deleteFromCart = (productId) => {
        let newCart = cart.filter((producto)=>{
            console.log(`Se eliminó del carrito el producto con ID: ${productId}`)
            return producto.id !== productId;
        })
        setCart(newCart);
        console.log("El carrito ahora contiene: ")
  }
  console.log(cart);


    return (
        <CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>
            {children}
        </CartContext.Provider>
    )
}