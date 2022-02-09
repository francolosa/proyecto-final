import { Link } from 'react-router-dom';

export default function NavBar(){

    return (
      <div>
        <h5 className="my-0 mr-md-auto font-weight-normal">Lleguemos a fin de mes</h5>
        <nav className="my-2 my-md-0 mr-md-3">
        
        <Link to="/" className="p-1 text-dark" >home</Link>
        <Link to="/" className="p-2 text-dark" id="listarProductos"  >productos</Link>
        <Link to="/search" className="p-2 text-dark" >búsqueda</Link>
        <Link to="/login" className="p-2 text-dark" id="iniciarsesion" >iniciar sesion</Link>
        <Link to="/signin" className="p-2 text-dark" >crear cuenta</Link>
      </nav>
      </div>
    )
}

 