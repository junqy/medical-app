import React from "react";
import useTableFilter from "./useTableFilter";

function useColumnGenerator() {
    const getColumnSearchProps = useTableFilter();

    const generateColumns = (data) => {
        const result = data.map((item) => {
            return {
                title: item.title,
                dataIndex: item.dataIndex,
                key: item.key,
                ...getColumnSearchProps(item.dataIndex, item.title),
                sorter: item.sorter,
                sortDirections: ["descend", "ascend"]
            }
        })

        return result
    }

    return generateColumns;
}

export default useColumnGenerator;
