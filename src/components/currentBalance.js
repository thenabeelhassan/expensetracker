import React, { useContext } from 'react'

import { GlobalContext } from '../context/globalContext';

export const CurrentBalance = () => {

    const { transaction } = useContext(GlobalContext);

    const transactionAmounts = transaction.map(transaction => transaction.transactionAmount);
    const balance = transactionAmounts
        .reduce((acc, item) => (acc += item), 0).toFixed(2);
    

    return (
        <span>
            {balance}
        </span>
    )
}
