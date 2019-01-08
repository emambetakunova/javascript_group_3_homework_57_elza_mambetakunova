import React, {Component} from 'react';
import Item from "../../components/ItemComponent/Item";
import List from "../../components/ListComponent/List";


class FinanceBuilder extends Component {

    state = {
        totalSpent: 0,
        itemCost: 0,
        itemName: '',
        items: [
            {text: 'Water', price: 25},
            {text: 'Milk', price: 40},
            {text: 'Bread', price: 15}
        ],
        showItems: true
    };

    calculateTotal = () => {
        return this.state.items.reduce((sum, item) => {
            return sum + item.price
        }, 0);
    };

    addItem = () => {
        if (this.state.itemName === "") {
            alert('Please, add your item!')
        } else {
            const newItem = {text: this.state.itemName, price: this.state.itemCost};
            const total = this.calculateTotal();
            const items = [...this.state.items];
            let totalSpent = this.state.itemCost + total;
            items.push(newItem);
            this.setState({totalSpent, items, itemName: '', itemCost: 0});
        }
    };

    changeHandlerName = event => {
        this.setState({itemName: event.target.value});
    };

    changeHandlerCost = event => {
        const cost = event.target.value;
        this.setState({itemCost: Number(cost)});
    };

    focusHandlerCost = () => {
        this.setState({itemCost: ''})
    };

    removeItem = id => {
        const index = this.state.items.findIndex(p => p.id === id);
        const allTask = [...this.state.items];
        allTask.splice(index, 1);

        this.setState({items: allTask});
    };

    render() {
        const total = this.calculateTotal();
        let items = null;

        if (this.state.showItems) {
            items = this.state.items.map((item) => (
                <List
                    key={item.text}
                    text={item.text}
                    price={item.price}
                    remove={() => this.removeItem(item.id)}
                />
            ));
        }

        return (
            <div className="Wrapper">
                <Item
                    changeHandlerName={this.changeHandlerName}
                    changeHandlerCost={this.changeHandlerCost}
                    itemName={this.state.itemName}
                    itemCost={this.state.itemCost}
                    onClick={() => this.addItem()}
                    onFocus={this.focusHandlerCost}
                />
                {items}
                <p className="totalSpent"><strong>Total spent: </strong>{total} KGS</p>
            </div>
        )
    }
}

export default FinanceBuilder;