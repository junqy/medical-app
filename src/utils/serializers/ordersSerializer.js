import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const dateFormat = "YYYY-MM-DD";

export const serializeOrder = (data) => {
    const currentDate = new Date();

    const serializedObject = {
        id: data.id ? data.id : uuidv4(),
        key: data.key ? data.key : uuidv4(),
        isFinished: data.endDate ? true : false,
        startDate: data.startDate ? data.startDate : dayjs(currentDate),
        endDate: data.endDate ? data.endDate : "",
        ...data,
    };

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
        : "";

    return serializedObject;
};

export const serializeToFinish = (data) => {
    const currentDate = new Date();

    const serializedObject = {
        ...data, 
        endDate: data.endDate ? data.endDate : dayjs(currentDate),
        isFinished: true,
    };

    serializedObject.endDate =
        typeof serializedObject.endDate === typeof dayjs(currentDate)
            ? serializedObject.endDate.format(dateFormat)
            : "";

    serializedObject.isFinished = serializedObject.endDate ? true : false;

    return serializedObject;
};
