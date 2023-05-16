import apiInstance from "../api";

const url = '/orders_results'

export const getOrdersResults = async () => {
    return await apiInstance.get(url)
}

export const deleteOrderResult = async (id) => {
    return await apiInstance.delete(`${url}/${id}`)
}

export const postOrderResult = async (data) => {
    return await apiInstance.post(url, data)
}

export const updateOrderResult = async (id, data) => {
    return await apiInstance.put(`${url}/${id}`, data)
}