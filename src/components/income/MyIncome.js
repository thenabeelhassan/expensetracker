import React from 'react'

export const MyIncome = ( { income } ) => {
    return (
        <div>
            <li>
                {income.incomeDetail}
                <span>
                    {Math.abs(income.incomeAmount)}
                </span>
            </li>
        </div>
    )
}
