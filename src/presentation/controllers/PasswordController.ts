import { PasswordBody } from "../../domain/models"
import { PasswordRepository } from "../../infra/repositories/password-repository"
import { HttpHelper } from "../helpers"
import { Controller } from "../protocols"

export class PasswordController implements Controller {
    
    constructor(private readonly passwordRepository: PasswordRepository) {}
   
    handle = (pwdBody: PasswordBody) => {

        const password = this.passwordRepository.execute(pwdBody)

        if (!password)
            return HttpHelper.INTERNAL_SERVER_ERROR("⚠️ Internal Server Error")

        return HttpHelper.SUCCESS(password, "🆗 Password successfully created!")
    } 
}