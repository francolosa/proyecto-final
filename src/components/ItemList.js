import Item from './Item'

export default function ItemList({ items }) {

    return (
        <div className="destacados">
            {
                items.map(function (item) {
                    return <Item key={item.id} item={item} />
                })
            }
        </div>
    )
}
