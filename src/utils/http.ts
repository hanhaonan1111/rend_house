import axios from 'axios'
export const baseURL = 'http://liufusong.top:8080/'
const http = axios.create({
    baseURL,
    timeout: 8000
})

http.interceptors.request.use((config: any) => {

    return config
})

http.interceptors.response.use((res) => {
    return res.data
}, (e) => {
    return Promise.reject(e)
})

export default http






