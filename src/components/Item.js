//import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";

export default function ({ item }) {


    return (
        <div className='col-md-4'>
            <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={item.img} alt=""></img>
                <div className="card-body">
                    <ul className="contenido">
                        <li>{item.nombre}</li>
                        <li>{item.precioxkg} x {item.cantidad} kg</li>
                        <li>Ubicación: {item.ubicacion}</li>
                    </ul>
                </div>
                <Link to={`/products/detail/${item.id}`} type="button" className="btn btn-outline-success">Más información</Link>
                
                
            </div>
        </div>
    )
}