import React, { useState } from 'react';
import productos from '../api/productos.json';

export default function ItemCount ({id, onAdd}) {

    const [itemCounter, setItemCounter] = useState(0);

    const addToCart = ()=>{
        onAdd(itemCounter)
    }

    const aumentarContador = () => { 
        if(productos[id].cantidad>0 && itemCounter<productos[id].cantidad){
        setItemCounter(itemCounter+1) 
    } 
    }
    
    const disminuirContador = () => {
        if(itemCounter>0){
        setItemCounter(itemCounter-1)
    } 
    }
    ;
    
    return ( <div className="itemCount">
            <button className="btn btn-outline-success" onClick={aumentarContador}>+ </button>
            <button className="btn btn-outline-success" > {itemCounter}</button>
            <button className="btn btn-outline-success" onClick={disminuirContador}>- </button>
            <button type="button" className="btn btn-outline-success" onClick={addToCart}>Agregar al carrito</button>
            </div>
            
        ) 

    
}