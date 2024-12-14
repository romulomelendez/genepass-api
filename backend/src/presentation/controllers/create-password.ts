import { Controller } from "../protocols"
import { PasswordBody } from "../../domain/models"
import { CreatePasswordRepository } from "../../infra/repositories/create-password"
import { HttpHelper } from "../helpers"

export class CreatePasswordController implements Controller {
    
    constructor(private readonly createPasswordRepo: CreatePasswordRepository) {}

    // @ts-ignore
    handle = (pwdBody: PasswordBody) => {

        const password = this.createPasswordRepo.execute(pwdBody)

        if (!password)
            return HttpHelper.INTERNAL_SERVER_ERROR("⚠️ Internal Server Error")

        return HttpHelper.SUCCESS(password, "🆗 Password successfully created!")
    } 
}