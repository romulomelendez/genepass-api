import { createContext } from "react"

export type CheckboxProps = {
    functionName: string,
    isChecked: boolean
}

type PwdContextProps = {
    pwdLength: string,
    setPwdLength: (newPwdLength: string) => void,
    handlePwdLength: (pwdLength: string) => void,
    isChecked: boolean,
    handleCheckbox: ({ functionName, isChecked }: CheckboxProps) => void
}

const initialValues = {
    pwdLength: "8",
    setPwdLength: () => {},
    handlePwdLength: () => {},
    isChecked: false,
    handleCheckbox: () => {},
}

export const PasswordContext = createContext<PwdContextProps>(initialValues)
