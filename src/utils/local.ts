export const KEY = 'RendHouseToken'

export function getToken() {
    return JSON.parse(localStorage.getItem(KEY))
}

export function setToken(val: string) {
    return localStorage.setItem(KEY, JSON.stringify(val))
}

export function hasToken() {
    return !!getToken()
}

