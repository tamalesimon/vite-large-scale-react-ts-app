import React from "react";

export const ItemsListComponent: React.FC<{
    items: any[]
}> = (props) => {
    return (
        <div>
            <h3>Items List</h3>
            <ul>
                {props.items.map((item) => (
                    <li key={item.index}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}