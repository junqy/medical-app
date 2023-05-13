import React from "react";
import useTableFilter from "./useTableFilter";

function useColumnGenerator() {
    const getColumnSearchProps = useTableFilter();

    const generateColumns = (data) => {
        const result = data.map((item) => {
            return {
                ...getColumnSearchProps(item.dataIndex, item.title),
                sortDirections: ["descend", "ascend"],
                ...item,
            }
        })

        return result
    }

    return generateColumns;
}

export default useColumnGenerator;
