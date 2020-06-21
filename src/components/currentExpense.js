import React, { useContext } from 'react'

import { GlobalContext } from '../context/globalContext';

export const CurrentExpense = () => {

    const { transaction } = useContext(GlobalContext);

    const transactionAmounts = transaction.map(transaction => transaction.transactionAmount);

    const expense = Math.abs(transactionAmounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        ).toFixed(2);


    return (
        <span>
            {expense}
        </span>
    )
}
