import apiInstance from "../api";

export const getPatients = async () => {
    return await apiInstance.get('/patients')
}