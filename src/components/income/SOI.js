import React, { useState, useContext } from 'react';

import { IncomeContext } from '../../context/incomeContext'

export const SOI = () => {


    const [incomeDetail, setIncomeDetail] = useState('')
    const [incomeAmount, setIncomeAmount] = useState('')

    const { newIncome } = useContext(IncomeContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const addIncome = {
            id: new Date().getTime(),
            incomeDetail,
            incomeAmount: +incomeAmount
        }

        newIncome(addIncome);

    }

    return (
        <section>
            <form
                onSubmit={onSubmit}
            >
                <input
                    type='text'
                    id='SOItype'
                    placeholder='Details of Income'
                    required='required'
                    value={incomeDetail}
                    onChange = { (e) => setIncomeDetail(e.target.value) }
                >
                </input>

                <input
                    type='text'
                    id='SOIamount'
                    placeholder='Amount of Income'
                    required='required'
                    value={incomeAmount}
                    onChange = { (e) => setIncomeAmount(e.target.value) }
                >
                </input>

                <button>
                    Add
                </button>

            </form>
        </section>
    );
};
