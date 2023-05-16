import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Row, Col, Divider } from "antd";

function OverallData({ patients, projects, research, orders, ordersResults }) {
    const data = [
        {
            id: "patients",
            label: "Pacjenci",
            value: patients.length,
            color: "hsl(359, 70%, 50%)",
        },
        {
            id: "projects",
            label: "Projekty",
            value: projects.length,
            color: "hsl(168, 70%, 50%)",
        },
        {
            id: "research",
            label: "Badania",
            value: research.length,
            color: "hsl(98, 70%, 50%)",
        },
        {
            id: "orders",
            label: "Zlecenia",
            value: orders.length,
            color: "hsl(289, 70%, 50%)",
        },
        {
            id: "ordersResults",
            label: "Wyniki Badań",
            value: ordersResults.length,
            color: "hsl(14, 70%, 50%)",
        },
    ];

    return (
        <Row>
            <Col span={24}>
                <Divider>
                    Dane Ogólne
                </Divider>
            </Col>
            <Col xs={24} lg={12}>
                    <div style={{ height: "500px" }}>
                        <ResponsivePie
                            data={data}
                            isInteractive={false}
                            margin={{
                                top: 40,
                                right: 80,
                                bottom: 80,
                                left: 80,
                            }}
                            innerRadius={0.1}
                            padAngle={0.7}
                            cornerRadius={3}
                            activeOuterRadiusOffset={8}
                            borderWidth={1}
                            borderColor={{
                                from: "color",
                                modifiers: [["darker", 0.2]],
                            }}
                            arcLinkLabel="label"
                            arcLinkLabelsSkipAngle={10}
                            arcLinkLabelsTextColor="#ffffff"
                            arcLinkLabelsThickness={2}
                            arcLinkLabelsColor={{ from: "color" }}
                            arcLabelsSkipAngle={10}
                            arcLabelsTextColor={{
                                from: "color",
                                modifiers: [["darker", 2]],
                            }}
                            defs={[
                                {
                                    id: "dots",
                                    type: "patternDots",
                                    background: "inherit",
                                    color: "rgba(255, 255, 255, 0.3)",
                                    size: 4,
                                    padding: 1,
                                    stagger: true,
                                },
                                {
                                    id: "lines",
                                    type: "patternLines",
                                    background: "inherit",
                                    color: "rgba(255, 255, 255, 0.3)",
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10,
                                },
                            ]}
                            fill={[
                                {
                                    match: {
                                        id: "patients",
                                    },
                                    id: "dots",
                                },
                                {
                                    match: {
                                        id: "projects",
                                    },
                                    id: "dots",
                                },
                                {
                                    match: {
                                        id: "research",
                                    },
                                    id: "dots",
                                },
                                {
                                    match: {
                                        id: "orders",
                                    },
                                    id: "dots",
                                },
                                {
                                    match: {
                                        id: "ordersResults",
                                    },
                                    id: "lines",
                                },
                            ]}
                        />
                    </div>
            </Col>
            <Col span={12}></Col>
        </Row>
    );
}

export default OverallData;
