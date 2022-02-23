import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react'
import { CartContext } from "../context/cartContext";

export default function ItemDetail({ item }) {
    const [showButton, setShowButton] = useState(false);
    const {addToCart, cart} = useContext(CartContext);

    function onAddItem(cantidad){
        setShowButton(true);
        addToCart(cantidad, item);
    }

    return (

        <div className='col-md-4' className="destacados">
            <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={item.img} alt={item.nombre}></img>
                <div className="card-body">
                    <ul className="contenido">
                        <li>{item.nombre}</li>
                        <li>{item.precioxkg} x {item.cantidad} kg</li>
                        <li>Ubicación: {item.ubicacion}</li>
                        <li>Dirección: {item.direccion}</li>
                        <li>Telefono: {item.telefono}</li>
                        <li>Local: {item.local}</li>

                    </ul>
                </div>
                {   !showButton  ?
                    <ItemCount id={item.id} onAdd={onAddItem}/> :
                    <><Link to="/cart" className="link">Ir al carrito</Link> <Link to="/products" className="link">Continuar comprando</Link></>
                }
            </div>
        </div>
        
    )
}