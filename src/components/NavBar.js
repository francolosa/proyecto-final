import React from 'react';

export default function NavBar(){
    return (
        <nav class="my-2 my-md-0 mr-md-3">
        <a href="#" className="p-1 text-dark" onclick="location.href='/views/index.html'">home</a>
        <a href="#" className="p-2 text-dark" id="listarProductos"  onclick="listarProductos()">productos</a>
        <a href="#" className="p-2 text-dark" onclick="vistaBusqueda()">búsqueda</a>
        <a href="#" className="p-2 text-dark" id="iniciarsesion" onclick="vistaLogin()">iniciar sesion</a>
        <a href="#" className="p-2 text-dark" onclick="vistaCrearCuenta()">crear cuenta</a>
      </nav>
    );
}

 