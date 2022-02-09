import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemSearch from './components/ItemSearch'
import LogIn from './components/LogIn'
import SignIn from './components/SignIn'

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} greetings="Productos" />
          <Route path="/products" element={<ItemListContainer />} greetings="Productos" />
          <Route path="/search" element={<ItemSearch />} greetings="Busqueda" />
          <Route path="/login" element={<LogIn />} greetings="Iniciar Sesión" />
          <Route path="/signin" element={<SignIn />} greetings="Crear Cuenta" />
          <Route path="/products/detail/:itemId" element={<ItemDetailContainer />} greetings="Detalle" />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
