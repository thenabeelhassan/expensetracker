import React from 'react'

import { SOI } from './SOI'
import { IncomeHistory } from './incomeHistory'

const SourceOfIncome = () => {
    return(
        <div
            id='source'
        >
            <section>
                <IncomeHistory />
            </section>

            <section>
                <SOI />
            </section>

        </div>
    );
};

export default SourceOfIncome
