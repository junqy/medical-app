import React, { useEffect, useState } from "react";
import { Button, Card, Col, Divider, Row } from "antd";
import ResearchTable from "../../components/research/ResearchTable";
import {
    deleteResearch,
    postResearch,
    updateResearch,
} from "../../api/services/researchService";
import errorHandler from "../../api/errorHandler";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import CommonForm from "../../components/common_form/CommonForm";
import { inputs } from "../../data/researchData";
import { serializeResearch } from "../../utils/serializers/researchSerializer";
import OrdersResultsTable from "../../components/research/OrdersResultsTable";
import { deleteOrderResult, postOrderResult } from "../../api/services/ordersResultsService";
import { serializeOrderResult } from "../../utils/serializers/ordersResultsSerializer";
import OrderResultForm from "../../components/research/OrderResultForm";

function Research({
    research,
    setResearch,
    promptError,
    ordersResults,
    setOrdersResults,
    orders,
    getAllOrdersResults
}) {
    const [researchFormVisible, setResearchFormVisible] = useState(false);
    const [ordersResultsFormVisible, setOrdersResultsFormVisible] = useState(false);
    const [formSubmited, setFormSubmited] = useState(false);

    const removeResearch = async (id) => {
        await deleteResearch(id)
            .then(() => {
                const projectsList = research.filter(
                    (research) => research.id !== id
                );
                setResearch(projectsList);
                getAllOrdersResults()
            })
            .catch((err) => errorHandler(err, promptError));
    };

    const addResearch = async (data) => {
        const serializedResearch = serializeResearch(data);
        await postResearch(serializedResearch)
            .then((response) => {
                const allResearch = [...research, response.data];
                setResearch(allResearch);
                setFormSubmited(true);
                setResearchFormVisible(false);
            })
            .catch((err) => errorHandler(err, promptError));
    };

    const editResearch = async (data) => {
        const serializedProject = serializeResearch(data);
        await updateResearch(serializedProject.id, serializedProject)
            .then((response) => {
                setResearch(
                    research.map((research) =>
                        research.id === serializedProject.id
                            ? { ...response.data }
                            : research
                    )
                );
            })
            .catch((err) => errorHandler(err, promptError));
    };

    const addOrderResult = async (data) => {
        const serializedOrder = serializeOrderResult(data);
        await postOrderResult(serializedOrder)
            .then((response) => {
                const allOrdersResults = [...ordersResults, response.data];
                setOrdersResults(allOrdersResults);
                setFormSubmited(true);
                setOrdersResultsFormVisible(false);
            })
            .catch((err) => errorHandler(err, promptError));
    };

    const removeOrderResult = async (id) => {
        await deleteOrderResult(id)
            .then(() => {
                const ordersResultsList = ordersResults.filter(
                    (orderResult) => orderResult.id !== id
                );
                setOrdersResults(ordersResultsList);
            })
            .catch((err) => errorHandler(err, promptError));
    };

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button
                            icon={
                                researchFormVisible ? (
                                    <CloseOutlined />
                                ) : (
                                    <PlusOutlined />
                                )
                            }
                            onClick={() => setResearchFormVisible(!researchFormVisible)}
                        >
                            {researchFormVisible ? "Anuluj" : "Dodaj"}
                        </Button>
                    </div>
                </Col>
                {researchFormVisible && (
                    <Col span={24}>
                        <Card title="Badanie" style={{ width: "100%" }}>
                            <CommonForm
                                inputs={inputs}
                                handleSubmit={addResearch}
                                formSubmited={formSubmited}
                                setFormSubmited={setFormSubmited}
                            />
                        </Card>
                    </Col>
                )}
                <Col span={24}>
                    <ResearchTable
                        research={research}
                        removeResearch={removeResearch}
                        formSubmited={formSubmited}
                        setFormSubmited={setFormSubmited}
                        editResearch={editResearch}
                        inputs={inputs}
                    />
                </Col>
                <Col span={24}>
                    <Divider>Wyniki badań</Divider>
                </Col>
                <Col span={24}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button
                            icon={
                                ordersResultsFormVisible ? (
                                    <CloseOutlined />
                                ) : (
                                    <PlusOutlined />
                                )
                            }
                            onClick={() => setOrdersResultsFormVisible(!ordersResultsFormVisible)}
                        >
                            {ordersResultsFormVisible ? "Anuluj" : "Dodaj"}
                        </Button>
                    </div>
                </Col>
                {ordersResultsFormVisible && (
                    <Col span={24}>
                        <Card title="Zlecenie" style={{ width: "100%" }}>
                            <OrderResultForm
                                research={research}
                                handleSubmit={addOrderResult}
                                formSubmited={formSubmited}
                                setFormSubmited={setFormSubmited}
                                orders={orders}
                                ordersResults={ordersResults}
                            />
                        </Card>
                    </Col>
                )}
                <Col span={24}>
                    <OrdersResultsTable
                        orders={orders}
                        research={research}
                        ordersResults={ordersResults}
                        removeOrderResult={removeOrderResult}
                    />
                </Col>
            </Row>
        </>
    );
}

export default Research;
