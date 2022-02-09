import { useEffect, useState } from 'react';
import getProductos from '../api/api';
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetail';
export default function ItemListContainer(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        getProductos().then(function(productsApi){
            setProducts(productsApi)
        })
    })

    return (
        <div className="destacados">
            <p>Nuestros productos</p>
            {products.length > 0 ? <ItemList items={products}/> : <p>Cargando...</p>}
        </div>
    )

};