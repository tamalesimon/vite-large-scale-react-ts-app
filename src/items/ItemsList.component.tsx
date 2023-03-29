import React from "react";
import { ItemInterface } from "./Item.interface";

export const ItemsListComponent: React.FC<{
    items:ItemInterface[]
}> = (props) => {
    return (
        <div>
            <h3>Items List</h3>
            <ul>
                {props.items.map((item) =>{
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}