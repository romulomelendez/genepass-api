import React, { useState, useContext, useEffect } from 'react'

import { CheckboxesContext } from '../../contexts/CheckboxesContext'

import { Section } from './style'

export const Checkboxes = () => {

    const [ numbers, setNumbers ] = useState(false)
    const [ uppers, setUppers ] = useState(false)
    const [ lowers, setLowers ] = useState(false)

    const { setCheckboxesData } = useContext(CheckboxesContext)

    useEffect(() => {
        
        setCheckboxesData({

            allowNumber: numbers,
            allowUpper: uppers,
            allowLower: lowers

        })

    }, [numbers, uppers, lowers, setCheckboxesData])

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