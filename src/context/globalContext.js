import React, { createContext, useReducer} from 'react'

import GlobalReducer from '../reducer/globalReducer'

const initialAmount = {
    transaction: []
}

export const GlobalContext = createContext(initialAmount);

export const GlobalProvider = ( { children } ) => {

    const [state, dispatch] = useReducer(GlobalReducer, initialAmount)

    function delTransaction(id) {
        dispatch({
            type: 'DEL_TRANSACTION',
            payload: id
        });
    }

    function newTransaction(transaction) {
        dispatch({
            type: 'NEW_TRANSACTION',
            payload: transaction
        })
    }


    return (
        <GlobalContext.Provider
            value={
                {
                    transaction: state.transaction,
                    delTransaction,
                    newTransaction
                }
            }
        >
            {children}
        </GlobalContext.Provider>
    );
};
