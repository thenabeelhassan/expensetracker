

export default (state, action) => {
    switch(action.type) {
        case 'DELETE_INCOME':
            return {
                ...state,
                income: state.income
                    .filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_INCOME':
            return {
                ...state,
                income: [action.payload, ...state.income]
            }
        default:
            return state;
    };
};

