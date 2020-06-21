import React from 'react'


import { CurrentBalance } from './currentBalance'
import { CurrentIncome } from './currentIncome'
import { CurrentExpense } from './currentExpense'


export const Balance = () => {
    return (
        <section
            id='summary'
        >
            <h2
                className='text-center'
            >
                Account Summary
            </h2>
            <section
                id='currentBalance'
                className='text-center'
            >
                <h3>
                    Current Balance
                </h3>
                <span>
                    <CurrentBalance />
                </span>
            </section>
            <section
                id='currentIncome'
                className='col-5 text-center'
            >
                <h3>
                    Income
                </h3>
                <span>
                    <CurrentIncome />
                </span>
            </section>
            <section
                id='currentExpense'
                className='col-5 text-center'
            >
                <h3>
                    Expense
                </h3>
                <span>
                    <CurrentExpense />
                </span>
            </section>
        </section>
    )
}
