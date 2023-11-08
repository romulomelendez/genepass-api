import { pwdBodyProps } from "../types"

export interface iPasswordRepository {
    create(body: pwdBodyProps): string
}