import axios from "axios";
const serve = axios.create({
    baseURL: "/",
    timeout: 3000
})

serve.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

serve.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})

export default serve