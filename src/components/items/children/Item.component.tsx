import React from "react";
import { ItemInterface } from "../../model/items/Item.interface";
import "../../../App.css";

type Props = {
    testId: string,
    model: ItemInterface,
    onItemSelect: (item: ItemInterface) => void
}

export const ItemComponent: React.FC<Props> = ({ testId, model, onItemSelect }) => {

    const getCssClass = (): any => {
        let css = 'item';
        if (model?.selected) {
            css+= ' selected'
        } return css.trim();
    }

    const handleItemClick = (item: ItemInterface) => {
        onItemSelect(item);
    }

    return (
        <div data-testid={testId} className={getCssClass()} onClick={() => handleItemClick(model)}>
            <div className="selected-indicator">*</div>
            <div className="name">{model.name}</div>
        </div>
    );
};


