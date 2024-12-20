export const CorsConfig = () => {

    const allowedOrigins = [
        'http://localhost:8080',
        'https://genepass-ui.vercel.app',
    ]
    
    return {
        origin: (origin, callback) => {

            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        },
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
    }
}