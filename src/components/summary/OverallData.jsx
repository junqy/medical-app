import React from "react";
import { Row, Col, Divider } from "antd";
import PieChart from "./PieChart";
import StatisticsCard from "./StatisticsCard";
import { generateColor } from "../../utils/colorGenerator";

function OverallData({ patients, projects, research, orders, ordersResults, breakpoints }) {
    const data = [
        {
            id: "patients",
            label: "Pacjenci",
            value: patients.length,
            color: generateColor(),
        },
        {
            id: "projects",
            label: "Projekty",
            value: projects.length,
            color: generateColor(),
        },
        {
            id: "research",
            label: "Badania",
            value: research.length,
            color: generateColor(),
        },
        {
            id: "orders",
            label: "Zlecenia",
            value: orders.length,
            color: generateColor(),
        },
        {
            id: "ordersResults",
            label: "Wyniki Badań",
            value: ordersResults.length,
            color: generateColor(),
        },
    ];

    return (
        <Row justify="space-around" align="middle" gutter={[8,8]}>
            <Col span={24}>
                <Divider>Dane Ogólne</Divider>
            </Col>
            <Col xs={24} lg={12}>
                <div style={{ height: breakpoints.xs ? "300px" : "520px" }}>
                    <PieChart data={data} />
                </div>
            </Col>
            <Col xs={24} lg={12}>
                <StatisticsCard title={"Ilość poszczególnych elementów"} data={data} />
            </Col>
        </Row>
    );
}

export default OverallData;
