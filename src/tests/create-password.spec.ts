import { describe, expect, test } from "@jest/globals"
import { PasswordBody } from "../domain/models"
import { CreatePasswordRepository } from "../infra/repositories/create-password"

describe("Create Password", () => {

    beforeEach(() => console.log("----------------------------------------------------------------"))

    test("It should create a password with just one preference", () => {

        const pwdSpecsObj: PasswordBody = {
            length: 10,
            symbols: true,
            numbers: false,
            capitalLetters: false,
            smallLetters: false
        }

        let password = new CreatePasswordRepository().execute(pwdSpecsObj)

        expect(typeof password).toBe("string")
        expect(password).toHaveLength(pwdSpecsObj.length)
    })

    test("It should create a password with just two preference", () => {

        const pwdSpecsObj: PasswordBody = {
            length: 10,
            symbols: true,
            numbers: true,
            capitalLetters: false,
            smallLetters: false
        }

        let password = new CreatePasswordRepository().execute(pwdSpecsObj)

        expect(typeof password).toBe("string")
        expect(password).toHaveLength(pwdSpecsObj.length)
    })

    test("It should create a password with just three preference", () => {

        const pwdSpecsObj: PasswordBody = {
            length: 10,
            symbols: true,
            numbers: true,
            capitalLetters: true,
            smallLetters: false
        }

        let password = new CreatePasswordRepository().execute(pwdSpecsObj)

        expect(typeof password).toBe("string")
        expect(password).toHaveLength(pwdSpecsObj.length)
    })

    test("It should create a password with all preference", () => {

        const pwdSpecsObj: PasswordBody = {
            length: 10,
            symbols: true,
            numbers: true,
            capitalLetters: true,
            smallLetters: true
        }

        let password = new CreatePasswordRepository().execute(pwdSpecsObj)

        expect(typeof password).toBe("string")
        expect(password).toHaveLength(pwdSpecsObj.length)
    })

    test("It should be at least one symbol character from the preferences", () => {

        const pwdSpecsObj: PasswordBody = {
            length: 10,
            symbols: true,
            numbers: false,
            capitalLetters: false,
            smallLetters: false
        }

        const symbolsArr = ["!", "@", "?", "-", "_", "=", "+", "*", "<", ">", ".", ";", ":", "{", "}", "[", "]", "#", "$", "%", "&"];

        const hasSymbol = (pwdString: string, symbolsArray: string[]): boolean => {
            return symbolsArray.some(symbol => pwdString.includes(symbol))
        }

        let password = new CreatePasswordRepository().execute(pwdSpecsObj)
        const hasSymbolInPwd = hasSymbol(password, symbolsArr)

        expect(hasSymbolInPwd).toBeTruthy()
       
    })

    test("It should be at least one character of all preferences", () => {

        const pwdSpecsObj: PasswordBody = {
            length: 10,
            symbols: true,
            numbers: true,
            capitalLetters: true,
            smallLetters: true
        }

        const symbolsArr = ["!", "@", "?", "-", "_", "=", "+", "*", "<", ">", ".", ";", ":", "{", "}", "[", "]", "#", "$", "%", "&"]
        const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        const capitalLettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        const smallLettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        
        const verifyItPwdHasPreference = (pwdString: string, contentsArray: string[]): boolean => {
            return contentsArray.some(content => pwdString.includes(content))
        }

        const hasAllPreferences = (pwdString: string): boolean => {
            
            if(!verifyItPwdHasPreference(pwdString, symbolsArr))
                return false

            if(!verifyItPwdHasPreference(pwdString, numbersArr))
                return false

            if(!verifyItPwdHasPreference(pwdString, capitalLettersArr))
                return false

            if(!verifyItPwdHasPreference(pwdString, smallLettersArr))
                return false

            return true
        }

        const password = new CreatePasswordRepository().execute(pwdSpecsObj)
        const hasAllPreferencesInPwd = hasAllPreferences(password)

        expect(hasAllPreferencesInPwd).toBeTruthy()
       
    })
})
