import axios from "axios"

// Create an Axios instance with withCredentials set to true
const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1', // Your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchTasks = async (clerkId: string = "") => {
    const response = await api.get(`/task/${clerkId}`);
    return response.data;
}

export const createTask = async (task: object) => {
    const response = await api.post('/task', task);
    return response.data;
};

export default api