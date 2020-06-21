import React, { useContext } from 'react'

import { GlobalContext } from '../context/globalContext';

export const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    return (
        <li className={transactionType}>
            {transaction.description}
            <span>{sign}{Math.abs(transaction.transactionAmount)}</span>
        </li>
    )
}