import { CreatePasswordRepositoryInterface } from "../../data/protocols/create-password-repository-interface"
import { PasswordBody } from "../../domain/models"

export class CreatePasswordRepository implements CreatePasswordRepositoryInterface {
    execute = async (params: PasswordBody) => {
        return ""
    }
}
