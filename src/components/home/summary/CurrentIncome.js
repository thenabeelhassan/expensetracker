import React from 'react'

import { TotalIncome } from '../../income/totalIncome'

export const CurrentIncome = () => {

    return (
        <section
            id='currentIncome'
            className='col-5'
        >
            <h3
                className='text-center'
            >
                Income
            </h3>
            <span>
                <TotalIncome />
            </span>
        </section>
    )
}
