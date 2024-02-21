import { Request, Response, Router } from "express"

import { CreatePasswordRepository } from "../infra/repositories"
import { CreatePasswordController } from "../presentation/controllers"

export const router = Router()

router.post("/api/createPwd", ({ body }: Request, res: Response) => {

    const createPasswordRepository = new CreatePasswordRepository()
    const createPasswordController = new CreatePasswordController(createPasswordRepository)

    const { statusCode, body: data, message } = createPasswordController.handle(body)

    res.status(statusCode).json({
        data,
        message
    })
})

router.get("/", (req: Request, res: Response) => {
    res.status(200).json("OK")
})
