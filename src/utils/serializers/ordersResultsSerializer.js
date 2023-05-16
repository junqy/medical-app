import { v4 as uuidv4 } from "uuid";

export const serializeOrderResult = (data) => {

    const serializedObject = {
        id: data.id ? data.id : uuidv4(),
        key: data.key ? data.key : uuidv4(),
        ...data,
    };

    return serializedObject;
};