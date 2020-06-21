import React, { createContext, useContext, useReducer } from 'react'

import GlobalReducer from '../reducer/globalReducer'

import { IncomeContext } from './incomeContext'

import { MyIncome } from '../components/income/MyIncome'

const initialContext = {
    history:
        [
            income.map(income => (
                <MyIncome key={income.id} income={income} />
            ))
        ]
}

export const GlobalContext = createContext(initialContext);


export const GlobalProvider = ( { children } ) => {

    const [state] = useReducer(GlobalReducer, initialContext)

    return (
        <GlobalContext.Provider
            value={
                {
                    income: state.income
                }
            }
        >
            {children}
        </GlobalContext.Provider>
    );
};

