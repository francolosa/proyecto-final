import Item from './Item'

export default function ItemList({productos}){

    return (
        <div>
            <p>Nuestros productos</p>
            <Item productos={productos}/>
        </div>
    )
}
