import { Request, Response, Router } from "express"

import { PasswordRepository } from "../infra/repositories"
import { PasswordController } from "../presentation/controllers"

export const router = Router()

router.post("/api/password/create", ({ body }: Request, res: Response) => {

    const passwordRepository = new PasswordRepository()
    const passwordController = new PasswordController(passwordRepository)

    const { statusCode, body: data, message } = passwordController.handle(body)

    res.status(statusCode).json({
        data,
        message
    })
})
