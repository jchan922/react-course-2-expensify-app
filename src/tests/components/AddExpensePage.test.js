import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

// reuse spies and wrappers
beforeEach(() => {
    addExpense = jest.fn();             // spies / mock functions
    history = { push: jest.fn() };      // spies / mock functions
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
})

test('should render AddExpense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenCalledWith(expenses[1]);
});