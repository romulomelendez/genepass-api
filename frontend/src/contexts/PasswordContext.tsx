import { createContext } from "react"

type PwdContextProps = {
    pwdLength: string,
    setPwdLength: (newPwdLength: string) => void,
    handlePwdLength: (pwdLength: string) => void,
    isChecked: boolean
}

const initialValues = {
    pwdLength: "8",
    setPwdLength: (newPwdLength: string) => {},
    handlePwdLength: (pwdLength: string) => {},
    isChecked: false
}

export const PasswordContext = createContext<PwdContextProps>(initialValues)
