

export default (state, action) => {
    switch(action.type) {
        case 'DEL_TRANSACTION':
            return {
                ...state,
                transaction: state.transaction
                    .filter(transaction => transaction.id !== action.payload)
            }
        case 'NEW_TRANSACTION':
            return {
                ...state,
                transaction: [action.payload, ...state.transaction]
            }
        default:
            return state;
    };
};

