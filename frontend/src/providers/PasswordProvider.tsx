"use client"

import { useState } from "react"

import { PasswordContext, initialValues } from "../contexts/PasswordContext"

import { PwdProviderProps, PwdProps, PasswordApiResponse, PwdPreferences } from "../types"

export const PasswordProvider = ({ children }: PwdProviderProps) => {

    const [pwdData, setPwdData] = useState<PwdProps>(initialValues.pwdData)
    const [password, setPassword] = useState("")

    const handlePwdUserPreferences = ({ name, content }: PwdPreferences): void => {

        let auxObject = initialValues.pwdData

        auxObject = Object.defineProperty(pwdData, name, {
            value: content
        })

        setPwdData({ ...auxObject })
    }

    const createPwd = async (): Promise<void> => {

        const pwdDataResponse = await fetch("http://localhost:3333/api/createPwd", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pwdData)
        })
        const pwd: PasswordApiResponse = await pwdDataResponse.json()
        setPassword(pwd.data)
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