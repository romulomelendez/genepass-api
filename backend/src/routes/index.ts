import { Request, Response, Router } from "express"

import { PasswordRepository } from "../repositories/PasswordRepository"

export const router = Router()

router.post("/api/createPwd", (req: Request, res: Response) => {

    const userPwdPreferences = req.body
    const pwdRepo = new PasswordRepository()
    const password = pwdRepo.create(userPwdPreferences)

    res.status(200).json(password)
})