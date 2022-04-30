import React, { useState, useContext } from 'react'

import { CheckboxesContext } from '../../contexts/CheckboxesContext'

import { Section } from './style'

export const CheckboxesContainer = () => {

    const [ numbers, setNumbers ] = useState(false)
    const [ uppers, setUppers ] = useState(false)
    const [ lowers, setLowers ] = useState(false)

    const { setCheckboxesData, checkboxesSum, setCheckboxesSum } = useContext(CheckboxesContext)
    
    const changeCheckboxesValue = (inputTarget) => {

        let inputName = inputTarget.target.className
        let isChecked = inputTarget.target.checked

        switch (inputName) {
            
            case 'numbers':
                
                if (isChecked === true) {

                    setNumbers(true)
                    setCheckboxesSum(checkboxesSum + 3)

                }
                    
                else {

                    setNumbers(false)
                    setCheckboxesSum(checkboxesSum - 3)

                }

                break

            case 'upper-letters':
                
                if (isChecked === true) {

                    setUppers(true)
                    setCheckboxesSum(checkboxesSum + 7)

                }
                    
                else {

                    setUppers(false)
                    setCheckboxesSum(checkboxesSum - 7)

                }

                break

            case 'lower-letters':
                
                if (isChecked === true) {

                    setLowers(true)
                    setCheckboxesSum(checkboxesSum + 15)

                }
                    
                else {

                    setLowers(false)
                    setCheckboxesSum(checkboxesSum - 15)

                }

                break

            default:

                // if( inputStateValue === true )
                //         setSymbol(true)
                //     else
                //         setSymbol(false)
    
                //     break

        }

        setCheckboxesData({
            number: numbers,
            upper: uppers,
            lower: lowers
        })
    
    }

    return (

        <Section className = "checkboxes-Section">

            <div>

                <input type = "checkbox" className = "numbers" onChange = { e => changeCheckboxesValue(e) } />
                <h4>{ numbers }</h4>
                <label>Numbers</label>

            </div>

            <div>

                <input type = "checkbox" className = "upper-letters" onChange = { e => changeCheckboxesValue(e) } />
                <h4>{ uppers }</h4>
                <label>Upper Letters</label>

            </div>

            <div>

                <input type = "checkbox" className = "lower-letters" onChange = { e => changeCheckboxesValue(e) } />
                <h4>{ lowers }</h4>
                <label>Lower Letters</label>

            </div>

        </Section>

    )

}