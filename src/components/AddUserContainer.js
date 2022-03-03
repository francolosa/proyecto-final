import React, { useState, useContext, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { CartContext } from '../context/cartContext';
import { isEmptyObject } from 'jquery';



const AddUserContainer = () => {
    const { cart, clearCart } = useContext(CartContext);
    let newOrder = {}
    //FORMULARIO Y ESTADOS
    const [nombre, setNombre] = useState();
    const [telefono, setTelefono] = useState();
    const [email, setEmail] = useState();
    const [empty, setEmpty] = useState(0);
    const [userId, setUserId] = useState("");
    const handleNombre = event => setNombre(event.target.value);
    const handleTelefono = event => setTelefono(event.target.value);
    const handleEmail = event => setEmail(event.target.value);
    
    //FUNCION 
    const onSubmit = async (event) =>{
        event.preventDefault();

        //LLAMADO A LA BASE DE DATOS DE ORDENES
        const ordersData = collection(db, "orders");

        //VALIDACION DE CAMPOS DEL FORMULARIO
        if(![nombre, telefono].some(field => field === "")){

        //ACCEDER AL CARRITO
        const newItems = []
        cart.map(function (item){
            return newItems.push(item.id, item.nombre, item.precio);
        })
        let totalPrice = 0;
        cart.map(function (item){
            totalPrice = item.precioxkg*item.cantidad+totalPrice;
        })

        console.log(cart)
        //CREAR NUEVA ORDEN
        
        newOrder = {
            
          comprador: {nombre, telefono, email}, items: {...cart}, date: Date(), total: totalPrice
            
        }
        
        //ENVIAR ORDEN AL SERVIDOR

        addDoc(ordersData, newOrder)
        .then(doc => {
                setUserId(doc.id)
                setEmpty(1);
                clearCart();

              //console.log("Se registro correctamente la orden código: ", doc.id);
        }) 
        .catch(error => {
            console.log(error)
        })
    
    }
} 



//<Link to={`/checkout/${userId}`} className="link" onClick="submit"><p>Terminar la orden</p></Link>
    return (

        <>
        {(empty == 0) ? (
                    <div>
                    <h1>Te pedimos tus datos de contacto</h1>
                    <form onSubmit={onSubmit}>
                        <label>Nombre</label>
                        <input value={nombre} onChange={handleNombre} type="text" name="nombre"/>
                        <label>Telefono</label>
                        <input value={telefono} onChange={handleTelefono} type="number" name="telefono"/>
                        <label>Email</label>
                        <input value={email} onChange={handleEmail} type="email" name="email"/>
                        <button type="submit">Terminar compra</button> 
                    </form>
                </div>
        ) : (
            <div>
                <p>Listo! {nombre} tu orden esta lista para ser retirada con el código {userId}</p>
            </div>
        ) }     

        </>
    )

}
export default AddUserContainer;
