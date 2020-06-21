import React, { useContext } from 'react';

import { IncomeContext } from '../../context/incomeContext'

import { MyIncome } from './MyIncome'

export const IncomeHistory = () => {

    const { income } = useContext(IncomeContext);

    // console.log(income)

    return (
        <div>
            <ul
                className='ulli col-11'
            >
                {income.map(income => (
                    <MyIncome key={income.id} income={income} />
                    ) )
                }
            </ul>
        </div>
    )
}
