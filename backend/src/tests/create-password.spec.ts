import { describe, expect, test } from "@jest/globals"
import { PasswordBody } from "../domain/models"

describe("Create Password", () => {

    test("It should create a password with just symbols and lenght 8", () => {

        const pwsSpecsObj: PasswordBody = {
            length: 8,
            symbols: true,
            numbers: false,
            capitalLetters: false,
            smallLetters: false,
        }

        expect(pwsSpecsObj).to
    })
})
