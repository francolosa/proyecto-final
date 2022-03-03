import { isEmptyObject } from 'jquery';
import {Link} from 'react-router-dom';
import React, {useContext} from 'react';
import { CartContext } from '../context/cartContext';

const Cart = (  ) => {

    const { cart, deleteFromCart } = useContext(CartContext);
    let total = 0;

    for(var i=0;i<cart.length;i++){
        total = total+cart[i].precioxkg*cart[i].cantidad;
    }

    function deleteItem(productId){
        deleteFromCart(productId);
    }

    return (
        <div>

            {(!isEmptyObject(cart)) ? <>
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
                    <td><button type="button" className="btn btn-outline" onClick={() => deleteItem(producto.id)}>Eliminar</button></td>
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

            <Link to="/register" className="link"><p>Ir a pagar</p></Link>
            <Link to="/products" className="link"><p>Continuar comprando</p></Link>
                </>
            : ( <p className="link">El carrito esta vacío.., te invitamos a continuar tu búsqueda <Link to="/Products"> por aquí </Link></p>) }
        

        </div>
        ) 
}

export default Cart;

