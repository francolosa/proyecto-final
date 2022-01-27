import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer.js'
import productos from './data/productos.json';
import carne from './images/palito.png'
import pollo from './images/pollo.png'



function App() {
  return (
    <div className="App">
      <NavBar/>

    <div className="destacados">
     <ItemListContainer 
     //en un futuro forEach??
     //img={productos[0].img} NO FUNCIONA???
     img={carne}
     name={productos[0].nombre} 
     precioxkg={productos[0].precioxkg}
     cantidad={productos[0].cantidadxkg}
     ubicacion={productos[0].ubicacion}/>
     
    <ItemListContainer 
     img={pollo}
     name={productos[1].nombre} 
     precioxkg={productos[1].precioxkg}
     cantidad={productos[1].cantidadxkg}
     ubicacion={productos[1].ubicacion}/>

    </div>
    <div>
      <Footer/>
    </div>

    </div>
  );
}

export default App;
