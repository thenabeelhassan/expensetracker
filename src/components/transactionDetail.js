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
                    onSubmit={onSubmit}
                >
                
                <div>
                    <input  
                        type="text" 
                        id="description"
                        value={transactionDetail}
                        onChange={(e) => settransactionDetail(e.target.value)}
                        placeholder="Detail of Transaction" 
                        required="required"
                    />
                </div>
                <div>
                    <input  
                        type="text" 
                        id="transactionamount"
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)}
                        placeholder="Value of Transaction"
                        required="required"
                    />
                </div>
                <button>
                    Add
                </button>
            </form>
        </section>
    )
}
