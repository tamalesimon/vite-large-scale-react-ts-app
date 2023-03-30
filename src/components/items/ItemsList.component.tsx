import React from "react";
import {ItemInterface} from "../model/items/Item.interface";


type Props = {
    items: ItemInterface[],
    onItemSelect: (item : ItemInterface) => void
}

export const ItemsListComponent: React.FC < Props > = (props) => {

    const handleItemClick = (item : ItemInterface) => {
        props.onItemSelect(item)
    }
    return (
        <div>
            <h3>Items List</h3>
            <ul> {
                props.items.map((item) => {
                    return <li key={
                            item.id
                        }
                        onClick={
                            () => handleItemClick(item)
                    }>
                        {
                        item.name
                    }</li>
            })
            } </ul>
        </div>
    )
}
