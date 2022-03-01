import './App.css';

//RUTAS 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//COMPONENTES

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer.js'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemSearch from './components/ItemSearch'
import LogIn from './components/LogIn'
import SignIn from './components/SignIn'
import Cart from './components/Cart'
import CartContextProvider from './context/cartContext'
import ItemOffersContainer from './components/ItemOffersContainer';


function App() {

  return (

    <CartContextProvider>
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} greetings="Productos" />
          <Route path="/cart" element={<Cart/>} greetings="Carrito" />
          <Route path="/products" element={<ItemListContainer />} greetings="Productos" />
          <Route path="/sale" element={<ItemOffersContainer/>} greetings="Ofertas"/>
          <Route path="/search" element={<ItemSearch />} greetings="Busqueda" />
          <Route path="/login" element={<LogIn />} greetings="Iniciar Sesión" />
          <Route path="/signin" element={<SignIn />} greetings="Crear Cuenta" />
          <Route path="/products/detail/:itemId" element={<ItemDetailContainer />} greetings="Detalle" />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
    </CartContextProvider>
  );
}

export default App;
