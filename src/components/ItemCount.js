import React, { useState } from 'react';
import productos from '../api/productos.json';

export default function ItemCount ({id, onAdd}) {

    const [number, setNumber] = useState(0);

    const addToCart = ()=>{
        onAdd(number)
    }

    const aumentarContador = () => { 
        if(productos[id].cantidad>0 && number<productos[id].cantidad){
        setNumber(number+1) 
    } 
    }
    
    const disminuirContador = () => {
        if(number>0){
        setNumber(number-1)
    } 
    }
    ;
    
    return ( <div className="itemCount">
            <button className="btn btn-outline-success" onClick={aumentarContador}>+ </button>
            <button className="btn btn-outline-success" > {number}</button>
            <button className="btn btn-outline-success" onClick={disminuirContador}>- </button>
            <button type="button" className="btn btn-outline-success" onClick={addToCart}>Agregar al carrito</button>
            </div>
            
        ) 

    
}