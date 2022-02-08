import { useEffect, useState } from 'react';
import getProductos from '../api/api';
import ItemList from './ItemList';

export default function ItemListContainer(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        getProductos().then(function(productsApi){
            setProducts(productsApi)
        })
    })

    return (
        <div>
            {products.length > 0 ? <ItemList productos={products}/> : <p>Cargando...</p>}
        </div>
    )

};
// export default function ItemListContainer(){
//     let todosLosProductos = [];

    
//    productos.forEach(producto => {
//         todosLosProductos.push(
//         <div className='col-md-4'>
//         <div className="card mb-4 box-shadow">
//         <img className="card-img-top" src={producto.img} alt=""></img>
//         <div className="card-body">
//         <ul className="contenido">
//         <li>{producto.name}</li>
//         <li>{producto.precioxkg} x {producto.cantidad} kg</li>
//         <li>Ubicación: {producto.ubicacion}</li>
//         </ul>
//         </div>
//         <button type="button" className="btn btn-outline-success">Más información</button>
//         <ItemCount id={producto.id}/>
//         <button type="button" className="btn btn-outline-success">Agregar al carrito</button>
//         </div>
//         </div>  
//         )
        
// })
//     return (
//         todosLosProductos
//     )
// }