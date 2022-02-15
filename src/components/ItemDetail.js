import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';
import { useState } from 'react'
export default function ItemDetail({ item }) {
    const [itemCount, setItemCount] = useState();

    function onAddItem(newItemCount){
        console.log(newItemCount);
        setItemCount(newItemCount);
    }

    return (
        
        <div className='col-md-4'>
            <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={item.img} alt=""></img>
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
                {   !itemCount ?
                    <ItemCount id={item.id} onAdd={onAddItem}/> :
                    <Link to="/cart">Ir al carrito</Link>
                }
            </div>
        </div>
    )
}