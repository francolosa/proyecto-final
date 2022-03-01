import { useEffect, useState } from 'react';
//import getItems from '../api/api';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc , getDoc } from 'firebase/firestore';
import { db } from "../firebase"; 

export default function ItemDetailContainer(){
 
    
    const [item, setItem] = useState([]);
    const { itemId } = useParams();
    
    useEffect(()=>{
/* CON JSON
        getItems().then((items)=>{
            const item = items.find((i) => i.id.toString() === itemId)
            setItem(item).catch((error)=>{
                console.log(error)
            })
        })
*/      
// CON FIREBASE  
        const itemRef = doc(db, "items", itemId);
        getDoc(itemRef)
        .then((snapshot) => {
            if(snapshot.exists()){
                setItem({ id: snapshot.id, ...snapshot.data() })
            }
        }).catch(error => {
            console.log(error)
        })

    },[itemId])

    return (
            <ItemDetail item={item}/> 
    )

};