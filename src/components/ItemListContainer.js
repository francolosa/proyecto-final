export default function ItemListContainer({img, name, precioxkg, cantidad, ubicacion}){
    return (
        <div className='col-md-4'>
        <div className="card mb-4 box-shadow">
        <img className="card-img-top" src={img} alt></img>
        <div className="card-body">
        <ul className="contenido">
        <li>{name}</li>
        <li>{precioxkg} x {cantidad} kg</li>
        <li>Ubicación: {ubicacion}</li>
        </ul>
        </div>
        <button type="button" className="btn btn-outline-success">Más información</button>
        </div>
        </div>  
        )

}