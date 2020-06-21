import React from 'react'

import Expenditure from '../components/home/expenditure'
import { Summary } from '../components/home/summary'

const Home = () => {
    return(
        <section
            id='home'
        >
            <Summary />
            <Expenditure />
        </section>
    )
}

export default Home

