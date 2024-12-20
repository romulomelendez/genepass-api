import express, { json } from "express"
import cors from "cors"

import { router } from "./routes"

const app = express()

const allowedOrigins = [
    'http://localhost:8080',
    'http://localhost:3000',
    'https://genepass-ui.vercel.app'
]

app.use(cors({
    origin: (origin, callback) => {

        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}))

app.use(json())
app.use(router)

export { app }
