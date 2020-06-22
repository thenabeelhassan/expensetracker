import React, { useContext } from 'react'

import { GlobalContext } from '../context/globalContext';

export const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    return (
        <li 
            id={transactionType}
        >
            {transaction.transactionDetail}
            <button
                onClick={() => delTransaction(transaction.id)}
            >
                x
            </button>
            <span>
                {sign}{Math.abs(transaction.transactionAmount)}
            </span>
        </li>
    )
}