import productos from '../api/productos.json';
const promesa = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(JSON.parse(productos));
        }, 2000);
    })
console.log(JSON.parse(productos));
export default function getProductos(){
    return promesa;
}

