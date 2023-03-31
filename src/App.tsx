import {useState} from 'react';
import {ItemInterface} from "./components/model/items/Item.interface";
import {ItemsListComponent} from "./components/items/ItemsList.component";

import "./App.css";

function App() {
    const initialItems: ItemInterface[] = [
        {
            id: 1,
            name: "Item 1",
            selected: true
        }, {
            id: 2,
            name: "Item 2",
            selected: false
        }, {
            id: 3,
            name: "Item 3",
            selected: false
        }, {
            id: 4,
            name: "Item 4",
            selected: true
        },
    ]

    const [items, setItems] = useState < ItemInterface[] > (initialItems)

    function onItemSelect(item : ItemInterface) {
        const updatedItems = [...items];
        const index = updatedItems.find((i) => i.id === item.id)as ItemInterface;
        index.selected = ! item.selected;

        console.log("App.tsx: onItemSelect ->", index.id, index.name, index.selected);
    }
    return (
        <div className='App'>
            <ItemsListComponent items={items}
                onItemSelect={onItemSelect}/>
        </div>
    )
}

export default App
