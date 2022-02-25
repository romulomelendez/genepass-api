import React from 'react'

import { Section } from './style'

export const Inputs = () => {

    return (

        <>

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