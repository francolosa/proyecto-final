import React, { useState } from 'react';


export default function ItemCount () {

    const [contador, setContador] = useState(0);
    const aumentarContador = () => { setContador(contador+1) };

    return (
            <button className="btn btn-outline-success" onClick={aumentarContador}>{contador}</button>
        ) 

    
}