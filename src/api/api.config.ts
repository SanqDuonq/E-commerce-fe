import axios from 'axios';

const APIConfig = axios.create({
    baseURL: import.meta.env.VITE_API_LOCAL,
    withCredentials: true
})

export default APIConfig;