import React from 'react'
import { generateColor } from "../../utils/colorGenerator";
import { Col, Divider, Row } from "antd";
import PieChart from "./PieChart";
import StatisticsCard from "./StatisticsCard";

function OrdersData({orders, breakpoints}) {

    const data = [
        {
            id: "finished",
            label: "Ukończone",
            value: orders.filter((order) => order.isFinished === true).length,
            color: generateColor()
        },
        {
            id: "unFinished",
            label: "W Trakcie",
            value: orders.filter((order) => order.isFinished === false).length,
            color: generateColor()
        }
    ]

    return (
        <Row justify="space-around" align="middle" gutter={[8,8]}>
            <Col span={24}>
                <Divider>Dane Badań</Divider>
            </Col>
            <Col xs={24} lg={12}>
                <div style={{ height: breakpoints.xs ? "300px" : "520px" }}>
                    <PieChart data={data} />
                </div>
            </Col>
            <Col xs={24} lg={12}>
                <StatisticsCard
                    title={"Ilość zleceń według statusu ukończenia"}
                    data={data}
                />
            </Col>
        </Row>
    );
}

export default OrdersData