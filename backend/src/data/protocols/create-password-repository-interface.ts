import { PasswordBody } from "../../domain/models"

export interface CreatePasswordRepositoryInterface {
    execute: (params: CreatePasswordRepositoryInterface.Params) => Promise<CreatePasswordRepositoryInterface.Result>
}

export namespace CreatePasswordRepositoryInterface {
    export type Params = PasswordBody
    export type Result = string
}