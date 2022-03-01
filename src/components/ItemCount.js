import React, { useEffect, useState } from 'react';
//import getProductos from '../api/api';
import { doc , getDoc } from 'firebase/firestore';
import { db } from "../firebase"; 
import { useParams } from 'react-router-dom';

export default function ItemCount ({id, onAdd}) {
/* CON JSON
    const [products, setProducts ] = useState()
    useEffect(()=>{
        getProductos().then(function(productos){
            setProducts(productos);
            }).catch(error=>{ console.log(error)})

    })
    console.log(products[0].cantidad)
*/
// CON FIREBASE 
    const [item, setItem ] = useState()
    const { itemId } = useParams();
    const itemRef = doc(db, "items", itemId);

    useEffect(()=>{
        getDoc(itemRef).then((snapshot)=>{
            if(snapshot.exists()){
                setItem({ id: snapshot.id, ...snapshot.data() })
            }
        }).catch(error=>{ console.log(error)})

    },[itemId])    

    const [number, setNumber] = useState(0);

    const addToCart = ()=>{
        onAdd(number)
    }

    const aumentarContador = () => { 
        if(item.cantidad>0 && number<item.cantidad){
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