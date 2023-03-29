import React from "react";
import { ItemInterface } from "./Item.interface";

export const ItemsListComponent: React.FC<{items:ItemInterface[]}> = (props) => {

    const handleItemClick =(item: ItemInterface) => {
        item.selected = !item.selected
        console.log('handleItemClick ->', item.id, item.selected);
    }
    return (
        <div>
            <h3>Items List</h3>
            <ul>
                {props.items.map((item) =>{
                    return <li key={item.id} onClick={()=> handleItemClick(item)}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}