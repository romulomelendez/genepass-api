import { createContext, ReactNode, useState } from "react"

const PasswordContext = createContext({})

export const PasswordProvider = ({ children }: { children: ReactNode }) => {

    const [isChecked, setIsChecked] = useState(false)

    // const handleCheckbox = ({ functionName , isChecked }) => {}

    return (

        <PasswordContext.Provider value={{ isChecked }}>
            { children }
        </PasswordContext.Provider>

    )
}