import React, { useState } from 'react'

import { Section } from './style'

export const Inputs = () => {

    const [ rangeHeight , setRangeHeight ] = useState(8)

    const getRangeWidth = () => {

        let rangeWidth = parseInt(document.querySelector('#input-range').value)
        setRangeHeight(rangeWidth)

    }

    return (

        <>

            <Section>

                <div>The password width is: { rangeHeight }</div>
                <div>

                    <input type = "range" id = "input-range" value = { rangeHeight } min = "4" max = "12" step = "1" onChange = { getRangeWidth } />

                </div>

            </Section>

            <Section className = "checkboxes-Section">

                <div>

                    <input type = "checkbox" className = "numbers" />
                    <label>Numbers</label>

                </div>

                <div>

                    <input type = "checkbox" className = "upper-letters" />
                    <label>Upper Letters</label>

                </div>

                <div>

                    <input type = "checkbox" className = "lower-letters" />
                    <label>Lower Letters</label>

                </div>

            </Section>

        </>

    )

}