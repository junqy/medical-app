import { Col, Row } from "antd";
import React from "react";
import OverallData from "../../components/summary/OverallData";

function Summary({ patients, projects, research, orders, ordersResults }) {
    return (
        <Row>
            <Col span={24}>
                <OverallData
                    patients={patients}
                    projects={projects}
                    research={research}
                    orders={orders}
                    ordersResults={ordersResults}
                />
            </Col>
        </Row>
    );
}

export default Summary;
