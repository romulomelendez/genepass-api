import { PasswordElementsProps } from "../../domain/models"

export interface PasswordSpecsInterface {
    createCharacterPreferenceArray: (params: CreateCharacterPreferenceArrayInterface.Param) => CreateCharacterPreferenceArrayInterface.Result
    shuffleCharacterArray: (params: ShuffleCharacterArrayInterface.Param) => ShuffleCharacterArrayInterface.Result
    createPassword: (param1: CreatePasswordInterface.Param1, param2: CreatePasswordInterface.Param2) => CreatePasswordInterface.Result
    validatePassword: (param1: ValidatePasswordInterface.Param1, param2: ValidatePasswordInterface.Param2) => ValidatePasswordInterface.Result
    verifyPasswordCharExistsInArray: (param1: VerifyPasswordCharExistsInArrayInterface.Param1, param2: VerifyPasswordCharExistsInArrayInterface.Param2) => VerifyPasswordCharExistsInArrayInterface.Result
    fillPreferencesArray: (param: FillPreferencesArray.Param) => FillPreferencesArray.Result
}

export namespace CreateCharacterPreferenceArrayInterface {
    export type Param = PasswordElementsProps
    export type Result = string[]
}

export namespace ShuffleCharacterArrayInterface {
    export type Param = string | string[]
    export type Result = string[]
}

export namespace CreatePasswordInterface {
    export type Param1 = string[]
    export type Param2 = number
    export type Result = string
}

export namespace ValidatePasswordInterface {
    export type Param1 = string
    export type Param2 = string[]
    export type Result = boolean
}

export namespace VerifyPasswordCharExistsInArrayInterface {
    export type Param1 = string
    export type Param2 = string
    export type Result = boolean
}

export namespace FillPreferencesArray {
    export type Param = string[]
    export type Result = string[]
}