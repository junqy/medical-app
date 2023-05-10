import { v4 as uuidv4 } from "uuid";

export const serializePatient = (data) => {
    const serializedObject = {
        id: uuidv4(),
        key: uuidv4(),
        name: data.name,
        surname: data.surname,
        birthDate: "1992-02-02",
        country: data.country,
        city: data.city,
        street: data.street,
        building: data.building,
        apartment: data.apartment,
        gender: data.gender,
        phoneNumber: data.phoneNumber,
        martialStatus: data.martialStatus,
        profession: data.profession,
    };

    return serializedObject
};
