import ItemCount from "./ItemCount"

export default function (product){
    return (
        
            <div className='col-md-4'>
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" src={product.img} alt=""></img>
                    <div className="card-body">
                        <ul className="contenido">
                            <li>{product[0].name}</li>
                            <li>{product.precioxkg} x {product.cantidad} kg</li>
                            <li>Ubicación: {product.ubicacion}</li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-outline-success">Más información</button>
                    <ItemCount id={product.id} />
                    <button type="button" className="btn btn-outline-success">Agregar al carrito</button>
                </div>
            </div>
        
    )
}