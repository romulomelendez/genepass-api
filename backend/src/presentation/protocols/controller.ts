import { PasswordBody } from "../../domain/models"
import { HttpResponse } from "./http-response"

export interface Controller<T = any> {
    handle(params: PasswordBody): Promise<HttpResponse<T>>
}
