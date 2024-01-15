import { describe, expect, test } from "@jest/globals"
import { PasswordBody } from "../domain/models"
import { CreatePasswordRepository } from "../infra/repositories/create-password"

describe("Create Password", () => {

    beforeEach(() => console.log("----------------------------------------------------------------"))

    test("It should create a password with just one preference", () => {

        const pwdSpecsObj: PasswordBody = {
            length: 10,
            symbols: true,
            numbers: false,
            capitalLetters: false,
            smallLetters: false
        }

        let password = new CreatePasswordRepository().execute(pwdSpecsObj)

        expect(typeof password).toBe("string")
        expect(password).toHaveLength(pwdSpecsObj.length)
    })

    test("It should create a password with just two preference", () => {

        const pwdSpecsObj: PasswordBody = {
            length: 10,
            symbols: true,
            numbers: true,
            capitalLetters: false,
            smallLetters: false
        }

        let password = new CreatePasswordRepository().execute(pwdSpecsObj)

        expect(typeof password).toBe("string")
        expect(password).toHaveLength(pwdSpecsObj.length)
    })

    test("It should create a password with just three preference", () => {

        const pwdSpecsObj: PasswordBody = {
            length: 10,
            symbols: true,
            numbers: true,
            capitalLetters: true,
            smallLetters: false
        }

        let password = new CreatePasswordRepository().execute(pwdSpecsObj)

        expect(typeof password).toBe("string")
        expect(password).toHaveLength(pwdSpecsObj.length)
    })

    test("It should create a password with all preference", () => {

        const pwdSpecsObj: PasswordBody = {
            length: 10,
            symbols: true,
            numbers: true,
            capitalLetters: true,
            smallLetters: true
        }

        let password = new CreatePasswordRepository().execute(pwdSpecsObj)

        console.log(password)
        expect(typeof password).toBe("string")
        expect(password).toHaveLength(pwdSpecsObj.length)
    })
})
