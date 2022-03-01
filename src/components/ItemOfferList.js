import Item from './Item'

export default function ItemOfferList({ items, offer }) {

    console.log("item offer list")
    console.log(offer)
    return (
        <div className="destacados">
            {
                items.map(function (item) {
                    console.log(offer)
                    console.log(item.offer)
                    if(offer===item.offer){
                    return <Item key={item.id} item={item} />
                }
                })
            }
        </div>
    )
}