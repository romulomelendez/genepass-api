import { PasswordRepositoryInterface } from "../../data"
import { PasswordBody } from "../../domain/models"

export class PasswordRepository implements PasswordRepositoryInterface {

    constructor(
        private readonly symbols: string[] = ["!", "@", "?", "-", "_", "=", "+", "*", "<", ">", ".", ";", ":", "{", "}", "[", "]", "#", "$", "%", "&"],
        private readonly numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        private readonly capitalLetters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        private readonly smallLetters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    ) {}

    execute = (pwdBody: PasswordBody) => {

        const verifyPwdSpecs = (pwdBody: PasswordBody): string[] => Object.keys(pwdBody).filter(key => pwdBody[key] === true)

        const pwdSpecsKeys: string[] = verifyPwdSpecs(pwdBody)
        const countPwdTrueValues: number = pwdSpecsKeys.length
        
        const createPreferenceCharactersArr = (pwdSpecsKeys: string[]): string[] => {

            let auxArr: string[] = []
            for(let i = 0; i < countPwdTrueValues; i++) {
                
                switch (pwdSpecsKeys[i]) {

                    case "symbols":
                        auxArr = auxArr.concat(this.symbols)
                        break

                    case "numbers":
                        auxArr = auxArr.concat(this.numbers)
                        break

                    case "capitalLetters":
                        auxArr = auxArr.concat(this.capitalLetters)
                        break

                    case "smallLetters":
                        auxArr = auxArr.concat(this.smallLetters)
                        break
                
                    default:
                        break
                }
            }

            return auxArr
        }

        const mix = (pwdContent: string | string[]) => {

            const newArray = [...pwdContent]
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
            }
            return newArray
        }

        const getRandomCharacterByArray = (array: string[]): string => {
            const randomNumber = Math.floor(Math.random() * (array.length - 0)) + 0
            return array[randomNumber]
        }

        const preferencesPwdArr = createPreferenceCharactersArr(pwdSpecsKeys)
        const mixedArray = mix(preferencesPwdArr)
        let password = ""
        const passwordLengthByUserPreference = Number(pwdBody.length)

        if(countPwdTrueValues !== 1) {

            for(let i = 0; i < countPwdTrueValues; i++) {
                
                switch (pwdSpecsKeys[i]) {

                    case "symbols":
                        const randomSymbol = getRandomCharacterByArray(this.symbols)
                        password += randomSymbol
                        break

                    case "numbers":
                        const randomNumber = getRandomCharacterByArray(this.numbers)
                        password += randomNumber
                        break

                    case "capitalLetters":
                        const randomCapLetter = getRandomCharacterByArray(this.capitalLetters)
                        password += randomCapLetter
                        break

                    case "smallLetters":
                        const randomSmallLetter = getRandomCharacterByArray(this.smallLetters)
                        password += randomSmallLetter
                        break
                
                    default:
                        break
                }
            }

        }

        const createPwd = (mixedArray: string[], pwdLength: number): void => {
            
            for(let i = 0; i < pwdLength; i++) {
                
                let randomNumber = Math.floor(Math.random() * (mixedArray.length - 0)) + 0
                password += mixedArray[randomNumber]
            }
            mix(password)
        }

        createPwd(mixedArray, (passwordLengthByUserPreference - password.length))

        password = password.toString()
        password = password.replace(/,/g, '')

        return password
    }

    // Getters
    getSymbols = () => {
        return this.symbols
    }
    
    getNumbers = () => {
        return this.numbers
    }
    getCapitalLetters = () => {
        return this.capitalLetters
    }
    getSmallLetters = () => {
        return this.smallLetters
    }
}
