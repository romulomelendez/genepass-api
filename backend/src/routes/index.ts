import { Request, Response, Router } from 'express'

export const router = Router()

router.post('/api/createPwd', (req: Request, res: Response) => {
    const data = req.body
    console.log(data)

    res.status(200).json("fdhwdkjfhdwkjfhdwjk")
})