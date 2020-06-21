import React from 'react'

import { Expenses } from './Expenses'
import { ExpenseHistory } from './expenseHistory'

const MyExpenses = () => {
    return(
        <div
            id='source'
        >
            <section>
                <ExpenseHistory />
            </section>

            <section>
                <Expenses />
            </section>

        </div>
    );
};

export default MyExpenses
