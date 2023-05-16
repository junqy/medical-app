import { Card, Col, Row, Statistic } from "antd";
import React from "react";

function StatisticsCard({ data, title }) {
    const statistics = data.map((item) => (
        <Col span={12} key={item.id}>
            <Statistic title={item.label} value={item.value} />
        </Col>
    ));

    return (
        <Card title={title}>
            <Row>
                {statistics}
            </Row>
        </Card>
    );
}

export default StatisticsCard;
