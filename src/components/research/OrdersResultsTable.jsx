import React, { useEffect, useState } from 'react'
import CommonTable from '../common_table/CommonTable'
import { ordersResultsColumns } from '../../data/ordersResultsData';
import useColumnGenerator from "../../hooks/useColumnGenerator";
import { DeleteFilled } from '@ant-design/icons';
import { Button, Space } from 'antd';



function OrdersResultsTable({research, ordersResults, removeOrderResult}) {
    const generateColumns = useColumnGenerator();
    const [data, setData] = useState([]);

    
    const assembleData = () => {
        setData(
            ordersResults.map((orderResult) => ({
                ...orderResult,
                researchName: research.find(
                    (research) => String(research.id) === orderResult.researchId
                )?.name,
            }))
        );
    };

    useEffect(() => {
        assembleData();
    }, [ordersResults, research])


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
        <CommonTable data={data} columns={columns}/>
    </>
  )
}

export default OrdersResultsTable