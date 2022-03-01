//import productsApi from '../api/productos.json';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

const promesa = new Promise(function(resolve, reject){
 
    getDocs(collection(db, 'items'))
    .then(snapshot => {
         const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}))

         resolve(products);
    })

}, []).catch(error => {
    console.log(error)
  
});

export default function getProductos(){
    return promesa;
}

