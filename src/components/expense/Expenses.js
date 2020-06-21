import React, { useState } from 'react';

export const Expenses = () => {

    const [expenseDetail, setExpenseDetail] = useState()
    const [expenseAmount, setExpenseAmount] = useState()

    return (
        <section>
            <form>
                <input
                    type='text'
                    id='SOItype'
                    placeholder='Details of Expense'
                    value={expenseDetail}
                    onChange = { (e) => setExpenseDetail(e.target.value) }
                >
                </input>

                <input
                    type='text'
                    id='SOIamount'
                    placeholder='Amount of Expense'
                    value={expenseAmount}
                    onChange = { (e) => setExpenseAmount(e.target.value) }
                >
                </input>

                <button>
                    Add
                </button>

            </form>
        </section>
    );
};
