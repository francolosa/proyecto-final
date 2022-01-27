import React from 'react';
import CartWidget from './CartWidget';
import icon from '../images/icon.jpeg'
export default function NavBar(){
    return (
      <div>
        <h5 className="my-0 mr-md-auto font-weight-normal">Lleguemos a fin de mes</h5>
        <nav className="my-2 my-md-0 mr-md-3">
        <CartWidget img={icon} href="#"/>
        <a href="#" className="p-1 text-dark" >home</a>
        <a href="#" className="p-2 text-dark" id="listarProductos"  >productos</a>
        <a href="#" className="p-2 text-dark" >búsqueda</a>
        <a href="#" className="p-2 text-dark" id="iniciarsesion" >iniciar sesion</a>
        <a href="#" className="p-2 text-dark" >crear cuenta</a>
      </nav>
      </div>
    )
}

 