
export type login = { username: string, password: string }

export type LoginResponse = {

    body: { token: string } | null,
    description: string,
    status: number
}