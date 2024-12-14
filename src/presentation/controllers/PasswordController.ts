import { Controller } from "../protocols"
import { PasswordBody } from "../../domain/models"
import { CreatePasswordRepository } from "../../infra/repositories/create-password"
import { HttpHelper } from "../helpers"

export class PasswordController implements Controller {
    
    constructor(private readonly passwordRepository: CreatePasswordRepository) {}
   
    handle = (pwdBody: PasswordBody) => {

        const password = this.passwordRepository.execute(pwdBody)

        if (!password)
            return HttpHelper.INTERNAL_SERVER_ERROR("⚠️ Internal Server Error")

        return HttpHelper.SUCCESS(password, "🆗 Password successfully created!")
    } 
}