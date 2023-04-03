import { render, fireEvent, prettyDOM } from "@testing-library/react";
import { ItemComponent } from "./Item.component";
import { ItemInterface } from "../../model/items/Item.interface";

describe('item.component: behavior', () => {

    it('Click event invokes onItemSelect handler as expected', () => {
        const testid = 'unit-test-item'
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 1',
            selected: false
        }

        const onItemSelect = vitest.fn();

        const { container } = render(<ItemComponent testId={testid} model={model} onItemSelect={onItemSelect}/>)
        const itemElement = container.firstChild as HTMLElement

        fireEvent.click(itemElement)
        expect(onItemSelect).toHaveBeenCalledTimes(1);
    })
})