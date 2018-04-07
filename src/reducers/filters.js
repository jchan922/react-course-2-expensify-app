import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
    const filters = state;
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...filters,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...filters,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...filters,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...filters,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...filters,
                endDate: action.endDate
            }
        default:
            return state;
    }
};
