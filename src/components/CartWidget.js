import { isEmptyObject } from 'jquery';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

export default function CartWidget(){

    const { cart } = useContext(CartContext);
    let cantidad = 0;
    cart.map((producto)=>{
        cantidad = cantidad+producto.cantidad;
    })
   

    return (
        <> {(!isEmptyObject(cart)) ? 
         <Link to="./Cart" className="link"><img width="35px" src='./images/icon.jpeg' alt='carrito'/>{cantidad}</Link>
            : "" }
        </>
        )
        
}