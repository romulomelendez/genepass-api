"use client"

import { useState, ReactNode } from "react"

import { PasswordContext } from '../contexts/PasswordContext'

type PwdProviderProps = {
    children: ReactNode
}

export const PasswordProvider = ({ children }: PwdProviderProps) => {

    const [pwdLength, setPwdLength] = useState<string>("8")
    const [isChecked, setIsChecked] = useState(false)

    const handlePwdLength = (pwdLength: string): void => setPwdLength(pwdLength)

    // const handleCheckbox = ({ functionName , isChecked }) => {}

    return (

        <PasswordContext.Provider value={{ 
            pwdLength,
            setPwdLength,
            handlePwdLength,
            isChecked 
        }}>
            { children }
        </PasswordContext.Provider>

    )
}