import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

// unconnect for snapshot testing
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense)=> {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
            )
        }

    </div>
);

const mapStateToProps = (state)=> {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);

// FLOW - Higher Order Component pattern
// connect takes two parameters
    // mapStateToProps - props you want from state
    // ExpenseList - component you'd like to connect Store to