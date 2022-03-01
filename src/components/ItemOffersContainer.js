import { useEffect, useState } from 'react';
import getProductos from '../api/api';
import ItemOfferList from './ItemOfferList';

export default function ItemListContainer(){
    console.log("item offer scontainer")
   const [products, setProducts] = useState([]);

    useEffect(()=>{

        getProductos().then(function(productsApi){
            setProducts(productsApi)
        }).catch(error=>{ console.log(error)})
    })
    let offer = 1;
    return (
        <div className="destacados">
            <p>Ofertas</p>
            {products.length > 0 ? <ItemOfferList items={products} offer={offer}/> : <p>Cargando...</p>}
        </div>
    )

};