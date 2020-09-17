import { ReactNode } from "react"

export type Props = {
    children: ReactNode
}

export type UserContextType = {
    username: string | null,
    userID: number | null,
}