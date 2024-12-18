import cors from "cors"
import express, { json } from "express"

import { router } from "./routes"

const app = express()

app.use(cors({
    origin: 'http://localhost:8080'
}))
app.use(json())
app.use(router)

export { app }
