import apiInstance from "../api";

const url = '/research'

export const getResearch = async () => {
    return await apiInstance.get(url)
}

export const deleteResearch = async (id) => {
    return await apiInstance.delete(`${url}/${id}`)
}

export const postResearch = async (data) => {
    return await apiInstance.post(url, data)
}

export const updateResearch = async (id, data) => {
    return await apiInstance.put(`${url}/${id}`, data)
}