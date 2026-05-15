import axios from "axios";
import type { Product } from "./types";
const api = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1",
});

export const getProducts = async () => {
    const response = await api.get("/products");
    return response.data;
}
export const getCategories = async () => {
    const response = await api.get("/categories");
    return response.data;
}

export const getProductsByCategory = async (categoryId: number) => {
    const response = await api.get(`/categories/${categoryId}/products`);
    return response.data;
}

export const getProductById = async (productId: string | undefined) => {
    const response = await api.get(`/products/${productId}`);
    return response.data;
}

