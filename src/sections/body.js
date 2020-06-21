import React from 'react'

import { Balance } from '../components/balance'
import { Detail } from '../components/detail'

export const Body = () => {
    return (
        <section
            id='body'
        >
            <Balance />
            <Detail />
        </section>
    )
}
