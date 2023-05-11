import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const dateFormat = 'YYYY-MM-DD';

export const serializePatient = (data) => {
    //console.log(data)
    const serializedObject = {
        id: data.id ? data.id : uuidv4(),
        key: data.key ? data.key : uuidv4(),
        ...data
    }

    serializedObject.birthDate = data.birthDate.format(dateFormat)
    //console.log(serializedObject)

    return serializedObject;
};

export const serializeDate = (data) => {
    const serializedObject = {
        ...data
    }
    
    serializedObject.birthDate = dayjs(data.birthDate, dateFormat)

    return serializedObject;
}
