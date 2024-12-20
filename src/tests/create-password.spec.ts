import { describe, expect, test } from "@jest/globals"
import { PasswordBody } from "../domain/models"
import { PasswordRepository } from "../infra/repositories"
import { PasswordUtils } from "../utils"

describe("Create Password", () => {

    beforeEach(() => console.log("----------------------------------------------------------------"))

    const areAllCharactersInArray = (password: string, preferenceArray: string[]): boolean => {
        
        const passwordConvertedToCharArray = [...password]
        
        return passwordConvertedToCharArray.every(char => preferenceArray.includes(char))
    }

    test("It should create a password with just one preference(symbols)", () => {
        
        const passwordRepository = new PasswordRepository()
        const passwordUtils = new PasswordUtils()

        const passwordSpecsObj: PasswordBody = {
            length: 10,
            elements: ['numbers']
        }

        const password = passwordRepository.execute(passwordSpecsObj)
        const symbolsArr = passwordUtils.getSymbols()

        const areAllSymbols = areAllCharactersInArray(password, symbolsArr)

        expect(typeof password).toBe("string")
        expect(password).toHaveLength(passwordSpecsObj.length)
        expect(areAllSymbols).toBeTruthy()
    })

    test("It should create a password with just two preference", () => {

        // const passwordUtils = new PasswordUtils()

        const passwordSpecsObj: PasswordBody = {
            length: 10,
            elements: ['numbers', 'symbols']
        }

        let password = new PasswordRepository().execute(passwordSpecsObj)

        expect(typeof password).toBe("string")
        expect(password).toHaveLength(passwordSpecsObj.length)
    })

    // test("It should create a password with just three preference", () => {

    //     const pwdSpecsObj: PasswordBody = {
    //         length: 10,
    //         symbols: true,
    //         numbers: true,
    //         capitalLetters: true,
    //         smallLetters: false
    //     }

    //     let password = new PasswordRepository().execute(pwdSpecsObj)

    //     expect(typeof password).toBe("string")
    //     expect(password).toHaveLength(pwdSpecsObj.length)
    // })

    // test("It should create a password with all preference", () => {

    //     const pwdSpecsObj: PasswordBody = {
    //         length: 10,
    //         symbols: true,
    //         numbers: true,
    //         capitalLetters: true,
    //         smallLetters: true
    //     }

    //     let password = new PasswordRepository().execute(pwdSpecsObj)

    //     expect(typeof password).toBe("string")
    //     expect(password).toHaveLength(pwdSpecsObj.length)
    // })

    // test("It should be at least one symbol character from the preferences", () => {

    //     const pwdSpecsObj: PasswordBody = {
    //         length: 10,
    //         symbols: true,
    //         numbers: false,
    //         capitalLetters: false,
    //         smallLetters: false
    //     }

    //     const symbolsArr = ["!", "@", "?", "-", "_", "=", "+", "*", "<", ">", ".", ";", ":", "{", "}", "[", "]", "#", "$", "%", "&"];

    //     const hasSymbol = (pwdString: string, symbolsArray: string[]): boolean => {
    //         return symbolsArray.some(symbol => pwdString.includes(symbol))
    //     }

    //     let password = new PasswordRepository().execute(pwdSpecsObj)
    //     const hasSymbolInPwd = hasSymbol(password, symbolsArr)

    //     expect(hasSymbolInPwd).toBeTruthy()
       
    // })

    // test("It should be at least one character of all preferences", () => {

    //     const pwdSpecsObj: PasswordBody = {
    //         length: 10,
    //         symbols: true,
    //         numbers: true,
    //         capitalLetters: true,
    //         smallLetters: true
    //     }

    //     const symbolsArr = ["!", "@", "?", "-", "_", "=", "+", "*", "<", ">", ".", ";", ":", "{", "}", "[", "]", "#", "$", "%", "&"]
    //     const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    //     const capitalLettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    //     const smallLettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        
    //     const verifyItPwdHasPreference = (pwdString: string, contentsArray: string[]): boolean => {
    //         return contentsArray.some(content => pwdString.includes(content))
    //     }

    //     const hasAllPreferences = (pwdString: string): boolean => {
            
    //         if(!verifyItPwdHasPreference(pwdString, symbolsArr))
    //             return false

    //         if(!verifyItPwdHasPreference(pwdString, numbersArr))
    //             return false

    //         if(!verifyItPwdHasPreference(pwdString, capitalLettersArr))
    //             return false

    //         if(!verifyItPwdHasPreference(pwdString, smallLettersArr))
    //             return false

    //         return true
    //     }

    //     const password = new PasswordRepository().execute(pwdSpecsObj)
    //     const hasAllPreferencesInPwd = hasAllPreferences(password)

    //     expect(hasAllPreferencesInPwd).toBeTruthy()
       
    // })
})
