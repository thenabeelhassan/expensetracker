import React, { useContext } from 'react'

import { IncomeContext } from '../../context/incomeContext'

export const TotalIncome = () => {

    const { income } = useContext(IncomeContext);

    const myIncome = income.map(income => income.incomeAmount)
    const myIncomeTotal = myIncome.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return(
        <div>
            <span
                id='myTotalIncome'
            >

            </span>
            {myIncomeTotal} RS.
        </div>
    );
};