"use client"

import { useState, ReactNode } from "react"

import { PasswordContext, initialValues } from "../contexts/PasswordContext"

import { PwdPreferences } from "../contexts/PasswordContext"

type PwdProviderProps = {
    children: ReactNode
}

export type PwdProps = {
    length: string,
    symbols: boolean,
    numbers: boolean,
    capitalLetters: boolean
    smallLetters: boolean
}

export const PasswordProvider = ({ children }: PwdProviderProps) => {

    const [pwdData, setPwdData] = useState<PwdProps>(initialValues.pwdData)

    const handlePwdUserPreferences = ({ name, content }: PwdPreferences): void => {

        if(!(name in pwdData))
            return

        let auxObject = pwdData
        auxObject = Object.defineProperty(pwdData, name, {
            value: content
        })

        setPwdData( prevState => { return { ...prevState, auxObject } })
    }

    return (

        <PasswordContext.Provider value={{ 
            pwdData,
            handlePwdUserPreferences
        }}>
            { children }
        </PasswordContext.Provider>

    )
}