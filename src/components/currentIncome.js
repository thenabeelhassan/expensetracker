import React, { useContext } from 'react'

import { GlobalContext } from '../context/globalContext';

export const CurrentIncome = () => {

    const { transaction } = useContext(GlobalContext);

    const transactionAmounts = transaction.map(transaction => transaction.transactionAmount);

    const income = transactionAmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);


    return (
        <span>
            {income}
        </span>
    )
}
