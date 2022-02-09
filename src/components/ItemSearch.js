
export default function ItemSearch(){

    return (
        <div className="search">
        <input type="text" placeholder="¿Que producto buscas?" id="busqueda" class="form-label" onchange="busqueda(this)"/>
        <input type="button" value="Buscar" class="btn btn-primary" id="buscar" onclick="funcionBuscar()"/>
    </div> 
    )
}