import { Col, Row, Grid } from "antd";
import React from "react";
import OverallData from "../../components/summary/OverallData";
import ResearchData from "../../components/summary/ResearchData";
import OrdersData from "../../components/summary/OrdersData";

const { useBreakpoint } = Grid;

function Summary({ patients, projects, research, orders, ordersResults }) {
    const breakpoints = useBreakpoint();

    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <OverallData
                    patients={patients}
                    projects={projects}
                    research={research}
                    orders={orders}
                    ordersResults={ordersResults}
                    breakpoints={breakpoints}
                />
            </Col>
            <Col span={24}>
                <ResearchData
                    research={research}
                    ordersResults={ordersResults}
                    breakpoints={breakpoints}
                />
            </Col>
            <Col span={24}>
                <OrdersData orders={orders} breakpoints={breakpoints}/>
            </Col>
        </Row>
    );
}

export default Summary;
