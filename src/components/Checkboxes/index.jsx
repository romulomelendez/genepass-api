import React, { useState, useEffect } from 'react'

import { Section } from './style'

export const Checkboxes = () => {

    const [ numbers, setNumbers ] = useState(false)
    const [ uppers, setUppers ] = useState(false)
    const [ lowers, setLowers ] = useState(false)

    const [ data, setData ] = useState({})

    useEffect(() => {
        
        setData({

            allowNumber: numbers,
            allowUpper: uppers,
            allowLower: lowers

        })

    }, [numbers, uppers, lowers])

    return (

        <Section className = "checkboxes-Section">

            <div>

                <input type = "checkbox" className = "numbers" onChange = { (e) => setNumbers(e.target.checked) } />
                <label>Numbers</label>

            </div>

            <div>

                <input type = "checkbox" className = "upper-letters" onChange = { (e) => setUppers(e.target.checked) } />
                <label>Upper Letters</label>

            </div>

            <div>

                <input type = "checkbox" className = "lower-letters" onChange = { (e) => setLowers(e.target.checked) } />
                <label>Lower Letters</label>

            </div>

        </Section>

    )

}