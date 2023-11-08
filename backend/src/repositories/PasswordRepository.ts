import { iPasswordRepository } from '../interfaces/iPasswordRepository'
import { pwdBodyProps } from '../types'

export class PasswordRepository implements iPasswordRepository {

    public create(body: pwdBodyProps): string {
        
        return ""
    }

    // public getPwdLength = (body: pwdBodyProps): number => {
    //     return Number(body.length)
    // }
}