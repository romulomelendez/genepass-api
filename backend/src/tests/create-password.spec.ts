import { describe, expect, test } from "@jest/globals"
import { PasswordBody } from "../domain/models"
import { CreatePasswordRepository } from "../infra/repositories/create-password"

describe("Create Password", () => {

    test("It should create a password with just symbols and lenght 8", () => {

        const pwdSpecsObj: PasswordBody = {
            length: 12,
            symbols: false,
            numbers: true,
            capitalLetters: false,
            smallLetters: false
        }

        let password = new CreatePasswordRepository().execute(pwdSpecsObj)

        expect(typeof password).toBe("string")
        expect(password).toHaveLength(pwdSpecsObj.length)
    })
})
