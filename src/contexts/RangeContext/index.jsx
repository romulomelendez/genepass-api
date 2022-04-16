import { useState, createContext } from 'react'

const initialValue = 8
export const RangeContext = createContext(initialValue)

export const RangeProvider = ({ children }) => {

    const [ inputRange , setInputRange ] = useState(initialValue)

    return (

        <RangeContext.Provider value={{ inputRange, setInputRange }}>
            
            { children }

        </RangeContext.Provider>

    )

}