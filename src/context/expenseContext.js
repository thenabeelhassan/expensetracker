import React, { createContext, useReducer} from 'react'

import ExpenseReducer from '../reducer/expenseReducer'

const initialExpense = {
    expense: [
        {id: 1, description: 'Internet Bill ', expenseAmount: 2500},
        {id: 2, description: 'Uni fees ', expenseAmount: 4000},
        {id: 3, description: 'Insurance Premium ', expenseAmount: 1000}
    ]
}

export const ExpenseContext = createContext(initialExpense);

export const ExpenseProvider = ( { children } ) => {

    const [state] = useReducer(ExpenseReducer, initialExpense)

    return (
        <ExpenseContext.Provider
            value={
                {
                    expense: state.expense
                }
            }
        >
            {children}
        </ExpenseContext.Provider>
    );
};
