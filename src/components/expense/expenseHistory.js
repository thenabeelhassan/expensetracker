import React, { useContext } from 'react';

import { ExpenseContext } from '../../context/expenseContext'

import { MyExpense } from './MyExpense'

export const ExpenseHistory = () => {

    const { expense } = useContext(ExpenseContext);

    // console.log(expense)

    return (
        <div>
            <ul
                className='ulli col-11'
            >
                {expense.map(expense => (
                    <MyExpense key={expense.id} expense={expense} />
                    ) )
                }
            </ul>
        </div>
    )
}
