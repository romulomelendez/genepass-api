import { HttpResponse } from "../protocols"

export class HttpHelper {
    
    static SUCCESS = <T>(data: T, message?: string): HttpResponse<T> => ({
        statusCode: 201,
        body: data,
        message
    })

    static INTERNAL_SERVER_ERROR = <T>(message?: string): HttpResponse<T> => ({
        statusCode: 500,
        message
    })
}