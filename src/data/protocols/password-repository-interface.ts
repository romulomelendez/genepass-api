import { PasswordBody } from "../../domain/models"

export interface PasswordRepositoryInterface {
    execute: (params: PasswordRepositoryInterface.Params) => PasswordRepositoryInterface.Result
}

export namespace PasswordRepositoryInterface {
    export type Params = PasswordBody
    export type Result = string
}