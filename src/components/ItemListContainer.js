import { useEffect, useState } from 'react';
import getProductos from '../api/api';
import ItemList from './ItemList';

export default function ItemListContainer(){
    console.log("itemlistcontainer")
   const [products, setProducts] = useState([]);
    useEffect(()=>{

        getProductos().then(function(productsApi){
            setProducts(productsApi)
        }).catch(error=>{ console.log(error)})
    })

    return (
        <div className="destacados">
            <p>Nuestros productos</p>
            {products.length > 0 ? <ItemList items={products}/> : <p>Cargando...</p>}
        </div>
    )

};