import { PasswordRepositoryInterface, PasswordUtilsInterface } from "../../data/protocols"
import { PasswordBody } from "../../domain/models"
import { PasswordUtils } from "../../utils/"

export class PasswordRepository implements PasswordRepositoryInterface {

    constructor(
        private readonly passwordUtils: PasswordUtilsInterface = new PasswordUtils()
    ) {}

    execute = ({ length: passwordLength, elements }: PasswordBody) => {

        const preferencesArray = this.passwordUtils.createCharacterPreferenceArray(elements)

        const shuffledCharArray = this.passwordUtils.shuffleCharacterArray(preferencesArray)

        let password = this.passwordUtils.createPassword(shuffledCharArray, +passwordLength)

        let passwordVerified = this.passwordUtils.validatePassword(password, preferencesArray)

        while(!passwordVerified) {
            password = this.passwordUtils.createPassword(shuffledCharArray, +passwordLength)
            passwordVerified = this.passwordUtils.validatePassword(password, preferencesArray)
        }

        return password
    }
}
