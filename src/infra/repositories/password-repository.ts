import { PasswordRepositoryInterface, PasswordUtilsInterface } from "../../data/protocols"
import { PasswordBody } from "../../domain/models"
import { PasswordUtils } from "../../utils/"

export class PasswordRepository implements PasswordRepositoryInterface {

    constructor(
        private readonly passwordUtils: PasswordUtilsInterface = new PasswordUtils(),
    ) {}

    execute = ({ length: passwordLength, elements }: PasswordBody) => {

        //  Set blank strings in the initial password array according the user preference length
        const initialPasswordWithBlankSpaces = this.passwordUtils.setBlankSpacesInInitialPassword(passwordLength)

        //  Set at least one character of each user preferences
        const passwordWithSomeCharacters = this.passwordUtils.setOneCharacterOfEachUserPreference(initialPasswordWithBlankSpaces, elements)

        //  Creates an array with elements according to user preferences
        const preferencesArray = this.passwordUtils.createCharacterPreferenceArray(elements)

        //  Mix the preference array created above
        const shuffledCharArray = this.passwordUtils.shuffleCharacterArray(preferencesArray)
        
        //  Creates the password in string array format
        const passwordArray = this.passwordUtils.createPassword(passwordWithSomeCharacters, shuffledCharArray)

        // Convert password string array to string
        const password = this.passwordUtils.convertPasswordArrayToString(passwordArray)

        return password
    }
}
