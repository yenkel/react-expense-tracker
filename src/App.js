import ExpenseForm from './expense-form';
import ExpenseDisplay from './expense-display';
import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { expenses: [] };

        this.addExpense = this.addExpense.bind(this);
    }

    addExpense() {
        const amount = document.getElementById('amt').value;
        const category = document.getElementById('cat').value;
        const description = document.getElementById('descr').value;

        let expense = {
            amt: amount,
            cat: category,
            descr: description
        };
        this.setState({ expenses: this.state.expenses.concat(expense) });

        console.log(this.state.expenses)
    }

    render() {
        return (
            <div className="App">
            <ExpenseForm addExpense={this.addExpense}/> 
            <ExpenseDisplay expenses={this.state.expenses}/>
            </div>
        );
    }
}

export default App;
