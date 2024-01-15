import { Controller } from "../protocols"
import { PasswordBody } from "../../domain/models"
import { CreatePasswordRepository } from "../../infra/repositories/create-password"

export class CreatePasswordController implements Controller {
    
    constructor( private readonly createPasswordRepo: CreatePasswordRepository) {}

    // @ts-ignore
    handle = async (pwdBody: PasswordBody) => {
        const password = await this.createPasswordRepo.execute(pwdBody)

        // if (!password) return HttpHelper.NOT_FOUND()

        // return HttpHelper.OK(password)
    } 
}