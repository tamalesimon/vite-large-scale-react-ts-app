import React from "react";
import { ItemInterface } from "../model/items/Item.interface";
import { ItemComponent } from "./children/Item.component";

type Props = {
  items: ItemInterface[];
  onItemSelect: (item: ItemInterface) => void;
};

export const ItemsListComponent: React.FC<Props> = (props) => {
  const handleItemClick = (item: ItemInterface) => {
    props.onItemSelect(item);
  };
  return (
    <div>
      <h3>Items List</h3>
      <ul>
        {props.items.map((item) => {
          return (
            <ItemComponent testId={`item-${ item.id}`} key={item.id} model={item} onItemSelect={() => handleItemClick(item)}/>
          );
        })}
      </ul>
    </div>
  );
};
