"use client"

import { useState, ReactNode } from "react"

import { PasswordContext } from "../contexts/PasswordContext"

import { CheckboxProps } from "../contexts/PasswordContext"

type PwdProviderProps = {
    children: ReactNode
}

type PwdProps = {
    length: string,
    symbols: boolean,
    numbers: boolean,
    capitalLetters: boolean
    smallLetters: boolean
}

const initialPwdValues = {
    length: "8",
    symbols: false,
    numbers: false,
    capitalLetters: false,
    smallLetters: false
}

export const PasswordProvider = ({ children }: PwdProviderProps) => {

    const [pwdLength, setPwdLength] = useState<string>(initialPwdValues.length)
    const [isChecked, setIsChecked] = useState(false)
    const [pwdData, setPwdData] = useState<PwdProps>(initialPwdValues)

    const handlePwdLength = (pwdLength: string): void => setPwdLength(pwdLength)

    const handleCheckbox = ({ functionName, isChecked }: CheckboxProps): void => {

        if(!(functionName in pwdData))
            return

        let auxObject = pwdData
        auxObject = Object.defineProperty(pwdData, functionName, {
            value: isChecked
        })

        setPwdData( prevState => { return { ...prevState, auxObject } })

    }

    return (

        <PasswordContext.Provider value={{ 
            pwdLength,
            setPwdLength,
            handlePwdLength,
            isChecked,
            handleCheckbox
        }}>
            { children }
        </PasswordContext.Provider>

    )
}