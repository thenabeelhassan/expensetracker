import React, { useContext } from 'react'

import { GlobalContext } from '../context/globalContext'

import { Transaction } from './transaction'

export const TransactionSummary = () => {

    const { transaction } = useContext(GlobalContext);

    return (
        <section
            className='history col-11'
        >
            <h2
                className='text-center'
            >
                Transactions
            </h2>
            <section>
                <ul
                    className='col-12'
                >
                    {transaction.map(transaction => 
                        (
                        <Transaction key={transaction.id} transaction={transaction} />
                        )
                    )}
                </ul>
            </section>
        </section>
    )
}
