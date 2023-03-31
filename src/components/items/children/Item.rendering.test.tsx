import { render, screen, prettyDOM } from '@testing-library/react';
import { ItemComponent } from './Item.component';
import { ItemInterface } from '@/components/model/items/Item.interface';

describe('Item.component: rendering', () => {

    it('renders an Item text correctly', () => {
        const testid = "unit-test-item"
        const model: ItemInterface = {
            id: 1,
            name: "Unit test item 1",
            selected: true
        }

        render(<ItemComponent testId={testid} model={model} onItemSelect={() => {}}/>)
        const itemElement = screen.getByTestId(testid);
        expect(itemElement).not.toBeNull();

        const children = itemElement.children
        expect(children.length).toBe(2);
        expect(children.item(1)?.innerHTML).toContain('Unit test item 1')
    })

    it('render an Item indicator correctly', () => {
        const testid = 'unit-test-indicator'
        const model: ItemInterface = {
            id: 1,
            name: "Unit test item 2",
            selected: false
        }

        render(<ItemComponent testId={testid} model={model} onItemSelect={() => {}}/>)
        const itemElement = screen.getByTestId(testid);
        expect(itemElement).not.toBeNull();

        const children = itemElement.children
        expect(children.length).toBe(2);
        expect(children.item(0)?.innerHTML).toContain('*')
    })

    it('Has expected css class when selected is true', () => {
        const testid = 'unit-test-item'
        const model: ItemInterface = {
            id: 1,
            name: "Unit test item 3",
            selected: true
        }

        render(<ItemComponent testId={testid} model={model} onItemSelect={() => {}}/>)
        const itemElement = screen.getByTestId(testid);

        expect(itemElement).not.toBeNull();

        expect(itemElement.className).toContain('selected');
    })

    it('Has expected css class when selected is false', () => {
        const testid = 'unit-test-item'
        const model: ItemInterface = {
            id: 1,
            name: "Unit test item 3",
            selected: false
        }

        render(<ItemComponent testId={testid} model={model} onItemSelect={() => {}}/>)
        const itemElement = screen.getByTestId(testid);

        expect(itemElement).not.toBeNull();

        expect(itemElement.className).not.toContain('selected');
    })
})