import { PasswordUtilsInterface } from "../data/protocols"

export class PasswordUtils implements PasswordUtilsInterface {

    constructor(
        private readonly symbols: string[] = ["!", "@", "?", "-", "_", "=", "+", "*", "<", ">", ".", ";", ":", "{", "}", "[", "]", "#", "$", "%", "&"],
        private readonly numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        private readonly capitalLetters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        private readonly smallLetters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    ) {}

    convertPasswordArrayToString = (passwordArray: string[]): string => {

        const finalPassword = passwordArray.join("")

        return finalPassword
    }

    setBlankSpacesInInitialPassword = (length: number): string[] => {
        return Array(length).fill("")
    }

    getRandomIndex = (length: number): number => {
        return Math.floor(Math.random() * length)
    }

    getRandomElementInArray = (preferenceArr: string[]): string => {

        const randomIndex = Math.floor(Math.random() * preferenceArr.length)
        return preferenceArr[randomIndex]
    }

    setRandomElementInPasswordArray = (passwordArray: string[], randomElement: string): string[] => {
        
        let randomIndex = this.getRandomIndex(passwordArray.length)

        while(passwordArray[randomIndex]) {
            randomIndex = this.getRandomIndex(passwordArray.length)
        }

        passwordArray[randomIndex] = randomElement

        return passwordArray
    }

    setOneCharacterOfEachUserPreference = (passwordArray: string[], elements: string[]): string[] => {
        
        let passwordArrayCopy = passwordArray
        let randomElement = ""
        
        // get a random element in each preference
        elements.map(preference => {

            switch(preference) {

                case "symbols":
                    randomElement = this.getRandomElementInArray(this.symbols)
                    passwordArrayCopy = this.setRandomElementInPasswordArray(passwordArrayCopy, randomElement)
                    break

                case "numbers":
                    randomElement = this.getRandomElementInArray(this.numbers)
                    passwordArrayCopy = this.setRandomElementInPasswordArray(passwordArrayCopy, randomElement)
                    break

                case "capitalLetters":
                    randomElement = this.getRandomElementInArray(this.capitalLetters)
                    passwordArrayCopy = this.setRandomElementInPasswordArray(passwordArrayCopy, randomElement)
                    break

                case "smallLetters":
                    randomElement = this.getRandomElementInArray(this.smallLetters)
                    passwordArrayCopy = this.setRandomElementInPasswordArray(passwordArrayCopy, randomElement)
                    break
            
                default:
                    break 
            }
        })

        return passwordArrayCopy
    }

    createCharacterPreferenceArray = (elements: string[]): string[] => {

        let superPreferencesArray: string[] = []

        elements.map(element => {

            switch(element) {

                case "symbols":
                    superPreferencesArray.push(...this.symbols)
                    break

                case "numbers":
                    superPreferencesArray.push(...this.numbers)
                    break

                case "capitalLetters":
                    superPreferencesArray.push(...this.capitalLetters)
                    break

                case "smallLetters":
                    superPreferencesArray.push(...this.smallLetters)
                    break
            
                default:
                    break 
            }
        })

        return superPreferencesArray
    }

    shuffleCharacterArray = (PwdCharArrayParams: string[]): string[] => {

        const newArray = [...PwdCharArrayParams]

        for (let i = newArray.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
        }
        return newArray
    }

    getFreeInidicesInArray = (passwordArray: string[]): number[] => {

        const indicesArray = passwordArray.reduce((indices, element, index) => {

            if(element === "")
                indices.push(index)
            return indices
        }, [])

        return indicesArray
    }

    createPassword = (passwordWithSomeCharacters: string[], shuffledCharArray: string[]): string[] => {
        
        let passwordArray = passwordWithSomeCharacters
        const freeIndices: number[] = this.getFreeInidicesInArray(passwordArray)

        freeIndices.map(freeIndice => {

            let randomElement = this.getRandomElementInArray(shuffledCharArray)
            passwordArray[freeIndice] = randomElement
        })

        return passwordArray
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