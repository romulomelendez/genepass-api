import { CreatePasswordRepositoryInterface } from "../../data/protocols/create-password-repository-interface"
import { PasswordBody } from "../../domain/models"

export class CreatePasswordRepository implements CreatePasswordRepositoryInterface {

    constructor(
        private readonly symbols: string[] = ["!", "@", "?", "-", "_", "=", "+", "*", "<", ">", ".", ";", ":", "{", "}", "[", "]", "#", "$", "%", "&"],
        private readonly numbers: string[]= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        private readonly capitalLetters: string[]= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        private readonly smallLetters: string[]= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    ) {}

    execute = async (pwdBody: PasswordBody) => {

        const verifyPwdSpecs = (pwdBody: PasswordBody): string[] => Object.keys(pwdBody).filter(key => pwdBody[key] === true)

        const pwdSpecsKeys: string[] = verifyPwdSpecs(pwdBody)
        const countPwdTrueValues = pwdSpecsKeys.length

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

        const mixArray = (preferencesPwdArr: string[]) => {

            const newArray = [...preferencesPwdArr]
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
            }

            return newArray
        }

        const preferencesPwdArr = createPreferenceCharactersArr(pwdSpecsKeys)
        const mixedArray = mixArray(preferencesPwdArr)

        const createPwd = (mixedArray: string[], pwdLength: number): string => {
            
            let auxPwd = ""

            for(let i = 0; i < +pwdLength; i++) {
                
                let randomNumber = Math.floor(Math.random() * (mixedArray.length - 0 + 1)) + 0
                auxPwd = auxPwd + mixArray[randomNumber]
            }

            return auxPwd
        }

        const password = createPwd(mixedArray, pwdBody.length)

        return password
    }
}
