import { PasswordSpecsInterface } from "../data/protocols"

export class PasswordSpecs implements PasswordSpecsInterface {

    constructor(
        private readonly symbols: string[] = ["!", "@", "?", "-", "_", "=", "+", "*", "<", ">", ".", ";", ":", "{", "}", "[", "]", "#", "$", "%", "&"],
        private readonly numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        private readonly capitalLetters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        private readonly smallLetters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    ) {}

    createCharacterPreferenceArray = (elements: string[]): string[] => {

        let auxArr: string[] = []

        for(let i = 0; i < elements.length; i++) {
            
            switch (elements[i]) {

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

    shuffleCharacterArray = (PwdCharArrayParams: string[]): string[] => {

        const newArray = [...PwdCharArrayParams]

        for (let i = newArray.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
        }
        return newArray
    }

    createPassword = (shuffledCharArray: string[], pwdLength: number): string => {
        
        let password = ''
        for(let i = 0; i < pwdLength; i++) {
            
            let randomNumber = Math.floor(Math.random() * (shuffledCharArray.length - 0)) + 0
            password += shuffledCharArray[randomNumber]
        }

        return password
    }

    fillPreferencesArray = (preferences: string[]): string[] => {

        let preferencesArr = []

        preferences.forEach(preference => {

            switch(preference) {

                case "symbols":
                    preferencesArr = [
                        ...preferencesArr,
                        this.symbols
                    ]
                break

                case "numbers":
                    preferencesArr = [
                        ...preferencesArr,
                        this.numbers
                    ]
                break

                case "capitalLetters":
                    preferencesArr = [
                        ...preferencesArr,
                        this.capitalLetters
                    ]
                break

                case "smallLetters":
                    preferencesArr = [
                        ...preferencesArr,
                        this.smallLetters
                    ]
                break
            }
        })

        return preferencesArr
    }

    verifyPasswordCharExistsInArray = (array: string, password: string): boolean => {

        const passwordConvertedToCharArray: string[] = password.split('')

        return passwordConvertedToCharArray.some(
            char => array.includes(char)
        )
    }

    validatePassword = (password: string, preferences: string[]): boolean => {

        const preferencesArr = this.fillPreferencesArray(preferences)

        return preferencesArr.every(
            array => this.verifyPasswordCharExistsInArray(array, password)
        )
    }
}