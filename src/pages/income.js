import React from 'react'

import { IncomeProvider } from '../context/incomeContext'

import { TotalIncome } from '../components/income/totalIncome'
import SourceOfIncome from '../components/income/sourceOfIncome'

const Income = () => {

    
    return(
        <IncomeProvider>
            <div
            id='income'
            >
                <section
                    id='totalIncome'
                    className='col text-center'
                >
                    <h2>
                        Total Income
                    </h2>
                    <TotalIncome />
                </section>
                <section
                    id='sourceOfIncome'
                    className='col'
                >
                    <h2
                        className='text-center'
                    >
                        Source Of Income
                    </h2>
                    <SourceOfIncome />
                </section>
            </div>
        </IncomeProvider>
    )
}

export default Income

