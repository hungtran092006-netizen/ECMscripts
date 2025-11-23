import axios from "axios";

const API_URL = "http://localhost:3001";

// Tạo axios instance để dùng chung
const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Gói gọn các hàm gọi API tours
export const toursAPI = {
    getAll: () => api.get("/tours"),
    getById: (id) => api.get(`/tours/${id}`),
    create: (data) => api.post("/tours", data),
    update: (id, data) => api.put(`/tours/${id}`, data),
    delete: (id) => api.delete(`/tours/${id}`),
};

export default api;