import React from 'react'

import { CurrentBalance } from './summary/CurrentBalance'
import { CurrentIncome } from './summary/CurrentIncome'
import { CurrentExpense } from './summary/CurrentExpense'

export const Summary = () => {
    return (
        <section
            id='summary'
        >
            <h2
                className='text-center'
            >
                Account Summary
            </h2>
            <CurrentBalance />
            <CurrentIncome />
            <CurrentExpense />
        </section>
    )
}
