type pwdBodyProps = {
    length: string | number,
    symbols: boolean,
    numbers: boolean,
    capitalLetters: boolean,
    smallLetters: boolean,
}

export class PasswordRepository {
    public getPwdLength = (body: pwdBodyProps): number => {
        return Number(body.length)
    }
}