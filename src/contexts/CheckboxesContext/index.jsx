import { useState, createContext } from 'react'


export const CheckboxesContext = createContext({})

export const CheckboxesProvider = ({ children }) => {

    const [ checkboxesData, setCheckboxesData ] = useState({})

    return (

        <CheckboxesContext.Provider value={{ checkboxesData, setCheckboxesData }}>
            
            { children }

        </CheckboxesContext.Provider>

    )

}