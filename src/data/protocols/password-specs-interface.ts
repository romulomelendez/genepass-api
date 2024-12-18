export interface PasswordUtilsInterface {
    
    convertPasswordArrayToString: (params: ConvertPasswordArrayToStringInterface.Param) => ConvertPasswordArrayToStringInterface.Result
    setBlankSpacesInInitialPassword: (params: SetBlankSpacesInInitialPasswordInterface.Param) => SetBlankSpacesInInitialPasswordInterface.Result
    setOneCharacterOfEachUserPreference: (param1: SetOneCharacterOfEachUserPreferenceInterface.Param1, param2: SetOneCharacterOfEachUserPreferenceInterface.Param2) => SetOneCharacterOfEachUserPreferenceInterface.Result
    createCharacterPreferenceArray: (params: CreateCharacterPreferenceArrayInterface.Param) => CreateCharacterPreferenceArrayInterface.Result
    shuffleCharacterArray: (params: ShuffleCharacterArrayInterface.Param) => ShuffleCharacterArrayInterface.Result
    createPassword: (param1: CreatePasswordInterface.Param1, param2: CreatePasswordInterface.Param2) => CreatePasswordInterface.Result
    validatePassword: (param1: ValidatePasswordInterface.Param1, param2: ValidatePasswordInterface.Param2) => ValidatePasswordInterface.Result
    verifyPasswordCharExistsInArray: (param1: VerifyPasswordCharExistsInArrayInterface.Param1, param2: VerifyPasswordCharExistsInArrayInterface.Param2) => VerifyPasswordCharExistsInArrayInterface.Result
    fillPreferencesArray: (param: FillPreferencesArrayInterface.Param) => FillPreferencesArrayInterface.Result
}

export namespace ConvertPasswordArrayToStringInterface {
    export type Param = string[]
    export type Result = string
}

export namespace SetBlankSpacesInInitialPasswordInterface {
    export type Param = number
    export type Result = string[]
}

export namespace SetOneCharacterOfEachUserPreferenceInterface {
    export type Param1 = string[]
    export type Param2 = string[]
    export type Result = string[]
}

export namespace CreateCharacterPreferenceArrayInterface {
    export type Param = string[]
    export type Result = string[]
}

export namespace ShuffleCharacterArrayInterface {
    export type Param = string | string[]
    export type Result = string[]
}

export namespace CreatePasswordInterface {
    export type Param1 = string[]
    export type Param2 = string[]
    export type Result = string[]
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

export namespace FillPreferencesArrayInterface {
    export type Param = string[]
    export type Result = string[]
}