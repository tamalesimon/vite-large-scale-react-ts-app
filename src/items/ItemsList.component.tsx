import React from "react";

export class ItemsListComponent extends React.Component<{
    items: any[];
}> {
    constructor(props: {
        items: any[];
    }) {
        super(props);
    }

    render(): React.ReactNode {
        const { items } = this.props;

        return (
            <div>
                <h3>Items List</h3>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}