import React from 'react'

export const MyExpense = ( { expense } ) => {
    return (
        <div>
            <li>
                {expense.description}
                <span>{expense.expenseAmount}</span>
            </li>
        </div>
    )
}
