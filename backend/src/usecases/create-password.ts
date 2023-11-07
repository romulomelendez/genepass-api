import { PasswordRepository } from '../repositories/PasswordRepository'

export class CreatePwd {
    constructor(
        private pwdRepo: PasswordRepository
    ) {}

    async execute({}: any) {
        
    }
}