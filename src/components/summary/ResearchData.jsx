import React from "react";
import { generateColor } from "../../utils/colorGenerator";
import { Col, Divider, Row } from "antd";
import PieChart from "./PieChart";
import StatisticsCard from "./StatisticsCard";

function ResearchData({ research, ordersResults, breakpoints }) {
    const filterData = () => {
        const researchData = research.map((research) => ({
            id: research.id,
            label: research.name,
            value: 0,
            color: generateColor(),
        }));
        const researchInOrdersIds = ordersResults.map(
            (order) => order.researchId
        );
        const filteredData = researchData.map((research) =>
            researchInOrdersIds.includes(String(research.id))
                ? {
                      ...research,
                      value: researchInOrdersIds.filter(
                          (id) => id === String(research.id)
                      ).length,
                  }
                : research
        );

        return filteredData;
    };

    return (
        <Row justify="space-around" align="middle" gutter={[8,8]}>
            <Col span={24}>
                <Divider>Dane Badań</Divider>
            </Col>
            <Col xs={24} lg={12}>
                <div style={{ height: breakpoints.xs ? "300px" : "520px" }}>
                    <PieChart data={filterData()} />
                </div>
            </Col>
            <Col xs={24} lg={12}>
                <StatisticsCard
                    title={"Ilość poszczególnych badań"}
                    data={filterData()}
                />
            </Col>
        </Row>
    );
}

export default ResearchData;
