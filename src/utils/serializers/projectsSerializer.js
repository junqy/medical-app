import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const dateFormat = "YYYY-MM-DD";

export const serializeProject = (data) => {
    const currentDate = new Date();

    console.log(data)

    const serializedObject = {
        id: data.id ? data.id : uuidv4(),
        key: data.key ? data.key : uuidv4(),
        patients: data.patients ? data.patients : [],
        agreedPatients: data.agreedPatients ? data.agreedPatients : [],
        isFinished: data.endDate ? true : false,
        startDate: data.startDate ? data.startDate : dayjs(currentDate),
        endDate: data.endDate ? data.endDate : null,
        ...data,
    };

    console.log(serializedObject)

    serializedObject.startDate = serializedObject.startDate.format(dateFormat);
    serializedObject.endDate =
        serializedObject.endDate && serializedObject.endDate.format(dateFormat);

    return serializedObject;
};

export const serializeDate = (data) => {
    const serializedObject = {
        ...data,
    };

    serializedObject.startDate = dayjs(data.startDate, dateFormat);
    serializedObject.endDate = serializedObject.endDate
        ? dayjs(data.endDate, dateFormat)
        : null;

    return serializedObject
};
