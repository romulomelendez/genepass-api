import { createContext } from "react"

import { PwdProps } from "../providers/PasswordProvider"

export type PwdPreferences = {
    name: string,
    content: boolean | string,
}

type PwdContextProps = {
    pwdData: PwdProps,
    handlePwdUserPreferences: ({ name, content }: PwdPreferences) => void
}

export const initialValues = {
    pwdData: {
        length: "8",
        symbols: false,
        numbers: false,
        capitalLetters: false,
        smallLetters: false
    },
    handlePwdUserPreferences: () => {}
}

export const PasswordContext = createContext<PwdContextProps>(initialValues)
