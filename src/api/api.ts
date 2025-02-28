import axios from "axios"

const api = axios.create({
    withCredentials: true,
    baseURL: String(import.meta.env.VITE_BACKEND_URL),
    headers: {
        'Content-Type': 'application/json',
    }
})

export default api