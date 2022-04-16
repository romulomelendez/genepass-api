import React, { useState } from 'react'

import { Section } from './style'

export const Range = () => {

    const [ inputRange , setInputRange ] = useState(8)

    return (

        <Section>

            <div>The password width is: { inputRange }</div>
            <div>

                <input type = "range" id = "input-range" value = { inputRange } min = "4" max = "12" step = "1" onChange = { e => setInputRange(Number(e.target.value)) } />
                
            </div>

        </Section>

    )

}