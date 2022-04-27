import { useState, createContext } from 'react'

export const CheckboxesContext = createContext()

export const CheckboxesProvider = ({ children }) => {

    const [ checkboxesData, setCheckboxesData ] = useState({})
    const [ checkboxesSum, setCheckboxesSum ] = useState(0)

    return (

        <CheckboxesContext.Provider value={{ checkboxesData, setCheckboxesData, checkboxesSum, setCheckboxesSum }}>
            
            { children }

        </CheckboxesContext.Provider>

    )

}