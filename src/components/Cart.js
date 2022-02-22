import React, {useContext} from 'react';
import { CartContext } from '../context/cartContext';
import ItemCount from "./ItemCount"

const Cart = () => {

    const { cart } = useContext(CartContext);
    let total = 0;

    for(var i=0;i<cart.length;i++){
        total = total+cart[i].precioxkg*cart[i].cantidad;
    }

    return (
        <div>
            <table class="table">
                <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio x Unidad</th>
                <th scope="col">Precio Total</th>
                </tr>
                </thead>  
                <tbody>
    
            {
                cart.map((producto)=>(
                    <tr>
                    <th scope="row">{producto.id}</th>
                    <td>{producto.nombre}</td>
                    <td>{producto.cantidad}</td>
                    <td>{producto.precioxkg}</td>
                    <td>{(producto.precioxkg)*(producto.cantidad)}</td>
                    </tr>
                ))

                }     
                <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td>{total}</td>
                </tr>              
              </tbody>
            </table>
        </div>
        ) 
}

export default Cart;

