import CommonTable from "../common_table/CommonTable";
import useColumnGenerator from "../../hooks/useColumnGenerator";
import { filterData } from "../../utils/filterData";
import React, { useEffect, useState } from "react";
import { researchColumns } from "../../data/researchData";

function OrderResearchTable({
    research,
    selectedOrder,
    orders,
}) {
    const generateColumns = useColumnGenerator();
    const [researchData, setResearchData] = useState([]);

    const filterOrders = () => {
        const filteredOrder = filterData(orders, selectedOrder);
        const filteredResearch = research?.filter((research) =>
            filteredOrder?.research.includes(String(research.id))
        );
        setResearchData(filteredResearch);
    };

    useEffect(() => {
        filterOrders();
    }, [selectedOrder]);

    const columns = [
        ...generateColumns(researchColumns),
    ];

    return (
        <>
            <CommonTable
                data={researchData}
                columns={columns}
            />
        </>
    );
}

export default OrderResearchTable;
