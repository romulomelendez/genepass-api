export interface PasswordRepository {
    createPassword(body: object): Promise<string>
}