import React, { useState } from 'react';
import productos from '../api/productos.json';

export default function ItemCount ({id}) {

    const [contador, setContador] = useState(0);

    const aumentarContador = () => { 
        if(productos[id].cantidad>0 && contador<productos[id].cantidad){
        setContador(contador+1) 
        console.log("agrega");
    } else { console.log("no agrega")}
    }
    
    const disminuirContador = () => {
        if(contador>0){
        setContador(contador-1)
    } 
    }
    ;
    
    return ( <div className="itemCount">
            <button className="btn btn-outline-success" onClick={aumentarContador}>+ </button>
            <button className="btn btn-outline-success" > {contador}</button>
            <button className="btn btn-outline-success" onClick={disminuirContador}>- </button>
            </div>
        ) 

    
}