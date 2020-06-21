import React, { createContext, useReducer} from 'react'

import IncomeReducer from '../reducer/incomeReducer'

const initialIncome = {
    income: []
}

export const IncomeContext = createContext(initialIncome);

export const IncomeProvider = ( { children } ) => {

    const [state, dispatch] = useReducer(IncomeReducer, initialIncome)

    function delIncome(id) {
        dispatch({
            type: 'DELETE_INCOME',
            payload: id
        });
    }

    function newIncome(income) {
        dispatch({
            type: 'ADD_INCOME',
            payload: income
        })
    }


    return (
        <IncomeContext.Provider
            value={
                {
                    income: state.income,
                    delIncome,
                    newIncome
                }
            }
        >
            {children}
        </IncomeContext.Provider>
    );
};
