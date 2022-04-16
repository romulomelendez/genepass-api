import React, { useContext } from 'react'

import { RangeContext } from '../../contexts/RangeContext'

import { Section } from './style'

export const Range = () => {

    const { inputRange , setInputRange } = useContext(RangeContext)

    return (

        <Section>

            <div>The password width is: { inputRange }</div>
            <div>

                <input type = "range" id = "input-range" value = { inputRange } min = "4" max = "12" step = "1" onChange = { e => setInputRange(Number(e.target.value)) } />

            </div>

        </Section>

    )

}