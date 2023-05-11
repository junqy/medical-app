import apiInstance from "../api";

const url = '/projects'

export const getProjects = async () => {
    return await apiInstance.get(url)
}

export const deleteProject = async (id) => {
    return await apiInstance.delete(`${url}/${id}`)
}

export const postProject = async (data) => {
    return await apiInstance.post(url, data)
}

export const updateProject = async (id, data) => {
    return await apiInstance.put(`${url}/${id}`, data)
}