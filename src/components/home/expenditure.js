import React from 'react'

import { IncomeDetails } from './expenditure/IncomeDetails'
import { ExpenseDetails } from './expenditure/ExpenseDetails'

const Expenditure = () => {
    return(
        <section
            id='details'
        >
            <h2
                className='text-center'
            >
                Expenditure
            </h2>

            <div>
                <h4
                    className='text-center'
                >
                    Income Details
                </h4>
                <IncomeDetails />
            </div>
            <div>
                <h4
                    className='text-center'
                >
                    Expense Details
                </h4>
                <ExpenseDetails />
            </div>

        </section>
    )
}

export default Expenditure

