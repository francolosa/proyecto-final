import ItemCount from "./ItemCount"

export default function ({productos}){

    return (
        <div className="destacados">
            {

            productos.map(function(producto){
                return (
                <div className='col-md-4'>
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" src="" alt=""></img>
                        <div className="card-body">
                            <ul className="contenido">
                                <li>{producto.nombre}</li>
                                <li>{producto.precioxkg} x {producto.cantidad} kg</li>
                                <li>Ubicación: {producto.ubicacion}</li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-outline-success">Más información</button>
                        <ItemCount id={producto.id} />
                        <button type="button" className="btn btn-outline-success">Agregar al carrito</button>
                    </div>
                </div>
            )})
            }
        </div>             
    )
}