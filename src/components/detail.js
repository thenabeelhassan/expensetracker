import React from 'react'

import { TransactionSummary } from './transactionSummary'
import { TransactionDetail } from './transactionDetail'

export const Detail = () => {
    return (
        <section
            id='detail'
        >
            <TransactionSummary />
            <TransactionDetail />
        </section>
    )
}
