import { createContext } from "react"

import { PwdProps } from "../providers/PasswordProvider"

export type PwdPreferences = {
    name: string,
    content: boolean | string,
}

type PwdContextProps = {
    pwdData: PwdProps,
    handlePwdUserPreferences: ({ name, content }: PwdPreferences) => void,
    password: string
    createPwd: () => void,
}

export const initialValues = {
    pwdData: {
        length: "8",
        symbols: false,
        numbers: false,
        capitalLetters: false,
        smallLetters: false
    },
    password: "",
    handlePwdUserPreferences: () => {},
    createPwd: () => {}
}

export const PasswordContext = createContext<PwdContextProps>(initialValues)
