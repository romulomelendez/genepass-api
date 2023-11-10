import { iPasswordRepository } from '../interfaces/iPasswordRepository'
import { pwdBodyProps } from '../types'

export class PasswordRepository implements iPasswordRepository {

    private symbols: string[] = ["!", "@", "?", "-", "_", "=", "+", "*", "<", ">", ".", ";", ":", "{", "}", "[", "]", "#", "$", "%", "&"]
    private numbers: string[]= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    private capitalLetter: string[]= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    private smallLetter: string[]= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    public create(body: pwdBodyProps): string {
        
        return ""
    }

    // public getPwdLength = (body: pwdBodyProps): number => {
    //     return Number(body.length)
    // }
}