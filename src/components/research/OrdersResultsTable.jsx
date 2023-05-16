import React from "react";
import CommonTable from "../common_table/CommonTable";
import { ordersResultsColumns } from "../../data/ordersResultsData";
import useColumnGenerator from "../../hooks/useColumnGenerator";
import { DeleteFilled } from "@ant-design/icons";
import { Button, Space } from "antd";

function OrdersResultsTable({ research, ordersResults, removeOrderResult }) {
    const generateColumns = useColumnGenerator();

    const assembleData = () => {
        const data = ordersResults.map((orderResult) => ({
            ...orderResult,
            researchName: research.find(
                (research) => String(research.id) === orderResult.researchId
            )?.name,
        }));

        return data
    };

    const columns = [
        ...generateColumns(ordersResultsColumns),
        {
            title: "Opcje",
            key: "options",
            render: (record) => (
                <Space size="middle">
                    <Button
                        danger
                        shape="circle"
                        icon={<DeleteFilled />}
                        onClick={() => removeOrderResult(record.id)}
                    />
                </Space>
            ),
        },
    ];

    return (
        <>
            <CommonTable data={assembleData()} columns={columns} />
        </>
    );
}

export default OrdersResultsTable;
