import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/globalContext';

export const TransactionDetail = () => {

    const [transactionDetail, settransactionDetail] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');

    const { newTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const addTransaction = {
            id: new Date().getTime(),
            transactionDetail,
            transactionAmount: +transactionAmount
        }

        newTransaction(addTransaction);

    }


    return (
        <section>
            <form 
                className='col-10'
                onSubmit={onSubmit}
            >       
                <input  
                    type="text" 
                    id="transactionDetail"
                    value={transactionDetail}
                    onChange={(e) => settransactionDetail(e.target.value)}
                    placeholder="Detail of Transaction" 
                    required="required"
                />
                <input  
                    type="text" 
                    id="transactionAmount"
                    value={transactionAmount}
                    onChange={(e) => setTransactionAmount(e.target.value)}
                    placeholder="Value of Transaction"
                    required="required"
                />
                <button>
                    Add
                </button>
                <br />
                <span>
                    Note: Please use '-' sign for Expense Amount
                </span>
            </form>
        </section>
    )
}
