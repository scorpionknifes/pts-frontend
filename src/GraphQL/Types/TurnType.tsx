import { User } from "./UserType"

export type Turns = {
    turns: Turn[]
}

export type Turn = {
    id: number,
    value: string,
    user: User,
    createdAt: string,
    updatedAt: string
}