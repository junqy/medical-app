import apiInstance from "../api";

const url = '/orders'

export const getOrders = async () => {
    return await apiInstance.get(url)
}

export const deleteOrder = async (id) => {
    return await apiInstance.delete(`${url}/${id}`)
}

export const postOrder = async (data) => {
    return await apiInstance.post(url, data)
}

export const updateOrder = async (id, data) => {
    return await apiInstance.put(`${url}/${id}`, data)
}