import { PasswordRepositoryInterface, PasswordSpecsInterface } from "../../data/protocols"
import { PasswordBody } from "../../domain/models"
import { PasswordSpecs } from "../../utils/"

export class PasswordRepository implements PasswordRepositoryInterface {

    constructor(
        private readonly passwordSpecs: PasswordSpecsInterface = new PasswordSpecs()
    ) {}

    execute = ({ length: passwordLength, elements }: PasswordBody) => {

        const preferencesArray = this.passwordSpecs.createCharacterPreferenceArray(elements)

        const shuffledCharArray = this.passwordSpecs.shuffleCharacterArray(preferencesArray)

        let password = this.passwordSpecs.createPassword(shuffledCharArray, +passwordLength)

        let passwordVerified = this.passwordSpecs.validatePassword(password, preferencesArray)

        while(!passwordVerified) {
            password = this.passwordSpecs.createPassword(shuffledCharArray, +passwordLength)
            passwordVerified = this.passwordSpecs.validatePassword(password, preferencesArray)
        }

        return password
    }
}
