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
    const [password, setPassword] = useState<any>("")

    const handlePwdUserPreferences = ({ name, content }: PwdPreferences): void => {

        if(!(name in pwdData))
            return

        let auxObject = pwdData
        auxObject = Object.defineProperty(pwdData, name, {
            value: content
        })

        setPwdData( prevState => { return { ...prevState, auxObject } })
    }

    const createPwd = async () => {
        const pwdDataResponse = await fetch("http://localhost:3333/api/createPwd", {
            mode: "cors",
            method: "POST",
            body: JSON.stringify(pwdData),
        })
        const pwd = await pwdDataResponse.json()
        setPassword(pwd)
    }

    return (

        <PasswordContext.Provider value={{ 
            pwdData,
            handlePwdUserPreferences,
            password,
            createPwd
        }}>
            { children }
        </PasswordContext.Provider>

    )
}