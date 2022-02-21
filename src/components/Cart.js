import React, {useContext} from 'react';
import { CartContext } from '../context/cartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);
    
    return (
        <div>
            {
                cart.map((producto)=>(
                        <h3>{producto.nombre}</h3>                    
                ))
                }                
        </div>
        ) 
}

export default Cart;