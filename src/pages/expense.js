import React from 'react'

import { ExpenseProvider } from '../context/expenseContext'

import TotalExpense from '../components/expense/totalExpense'
import MyExpenses from '../components/expense/myExpenses'

const Expense = () => {

    
    return(
        <ExpenseProvider>
            <div
            id='expense'
        >
            <section
                id='totalExpense'
                className='col text-center'
            >
                <h2>
                    Total Expense
                </h2>
                <TotalExpense />
            </section>
            <section
                id='MyExpense'
                className='col'
            >
                <h2
                    className='text-center'
                >
                    My Expenses
                </h2>
                <MyExpenses />
            </section>
        </div>
        </ExpenseProvider>
    )
}

export default Expense

