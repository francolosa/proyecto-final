import ItemCount from "./ItemCount"

export default function ItemDetail({ item }) {

    return (
        
        <div className='col-md-4'>
            <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={item.img} alt=""></img>
                <div className="card-body">
                    <ul className="contenido">
                        <li>{item.nombre}</li>
                        <li>{item.precioxkg} x {item.cantidad} kg</li>
                        <li>Ubicación: {item.ubicacion}</li>
                        <li>Dirección: {item.direccion}</li>
                        <li>Telefono: {item.telefono}</li>
                        <li>Local: {item.local}</li>

                    </ul>
                </div>
                <ItemCount id={item.id} />
                <button type="button" className="btn btn-outline-success">Agregar al carrito</button>
            </div>
        </div>
    )
}