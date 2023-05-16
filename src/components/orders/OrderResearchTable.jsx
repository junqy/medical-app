import CommonTable from "../common_table/CommonTable";
import useColumnGenerator from "../../hooks/useColumnGenerator";
import { filterData } from "../../utils/filterData";
import { researchColumns } from "../../data/researchData";
import React from "react";

function OrderResearchTable({
    research,
    selectedOrder,
    orders,
}) {
    const generateColumns = useColumnGenerator();

    const filterOrderResearch = () => {
        const filteredOrder = filterData(orders, selectedOrder);
        const filteredResearch = research?.filter((research) =>
            filteredOrder?.research.includes(String(research.id))
        );

        return filteredResearch
    };

    const columns = [
        ...generateColumns(researchColumns),
    ];

    return (
        <>
            <CommonTable
                data={filterOrderResearch()}
                columns={columns}
            />
        </>
    );
}

export default OrderResearchTable;
