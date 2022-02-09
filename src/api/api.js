import productsApi from '../api/productos.json';

//var string = JSON.stringify(productos);
//var parse = JSON.parse(string);

const promesa = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(productsApi);
        }, 0);
    })

export default function getProductos(){
    return promesa;
}

