import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer.js'
//import productos from '../data/productos.json';

function App() {

  return (
    <div className="App">
      <NavBar />

      <div className="destacados">
      <ItemListContainer/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
