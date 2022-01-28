import productos from '../data/productos.json';

export default function ItemListContainer(){
    let todosLosProductos = [];
    
    let arrayForEach = productos.forEach(producto => {
        todosLosProductos.push(
        <div className='col-md-4'>
        <div className="card mb-4 box-shadow">
        <img className="card-img-top" src={producto.img} alt=""></img>
        <div className="card-body">
        <ul className="contenido">
        <li>{producto.name}</li>
        <li>{producto.precioxkg} x {producto.cantidad} kg</li>
        <li>Ubicación: {producto.ubicacion}</li>
        </ul>
        </div>
        <button type="button" className="btn btn-outline-success">Más información</button>
        </div>
        </div>  
        )
        console.log(todosLosProductos.map());
})
    return (
        ""
    )
}