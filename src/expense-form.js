import React, { Component } from 'react';
import SingleInput from './single-input';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.changeExpense = this.changeExpense.bind(this);
        this.addExpense = this.addExpense.bind(this);
        this.state = { amt: 0, cat: "", descr: "" };
        console.log(this.state);
    }

    changeExpense(e) {

        this.setState({
            [e.target.id]: e.target.value
        });
    }

    addExpense() {
        this.props.addExpense(this.state);
        this.setState({ amt: 0, cat: '', descr: '' });
    }

    render() {
        return (
            <div>
                <SingleInput id="amt" content={this.state.amt} type="number" 
                        placeholder="$" controlFunc={this.changeExpense} />
                <SingleInput id="cat" content={this.state.cat}  type="text" 
                        placeholder="Category" controlFunc={this.changeExpense} />
                <SingleInput id="descr" content={this.state.descr}  type="text" 
                        placeholder="Description" controlFunc={this.changeExpense} />
                <button onClick={this.addExpense}>Add Expense</button>
            </div>
        );
    }
}

export default ExpenseForm;
