import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';                 // defines/connects store to components
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';           // react-dates css
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

// store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 0, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const jsx = (
  <Provider store={store}>
      <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
