import React, { useContext } from 'react'

import { GlobalContext } from '../context/globalContext'

import { Transaction } from './transaction'

export const TransactionSummary = () => {

    const { transaction } = useContext(GlobalContext);

    return (
        <div>
            <ul className="list">
                {transaction.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
        </div>
    )
}
