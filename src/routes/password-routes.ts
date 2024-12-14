import { Request, Response, Router } from "express"

import { CreatePasswordRepository } from "../infra/repositories"
import { CreatePasswordController } from "../presentation/controllers"

export const router = Router()

router.post("/api/password/create", ({ body }: Request, res: Response) => {

    const createPasswordRepository = new CreatePasswordRepository()
    const createPasswordController = new CreatePasswordController(createPasswordRepository)

    const { statusCode, body: data, message } = createPasswordController.handle(body)

    res.status(statusCode).json({
        data,
        message
    })
})
