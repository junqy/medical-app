import React, { useState } from "react";
import { Button, Card, Col, Row } from "antd";
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

function Research({ research, setResearch, promptError }) {
    const [formVisible, setFormVisible] = useState(false);
    const [formSubmited, setFormSubmited] = useState(false);
    
    const removeResearch = async (id) => {
        await deleteResearch(id)
            .then(() => {
                const projectsList = research.filter(
                    (research) => research.id !== id
                );
                setResearch(projectsList);
            })
            .catch((err) => errorHandler(err, promptError));
    };

    const addResearch = async (data) => {
        const serializedResearch = serializeResearch(data)
        await postResearch(serializedResearch)
            .then((response) => {
                const allResearch = [...research, response.data];
                setResearch(allResearch);
                setFormSubmited(true);
                setFormVisible(false);
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
                                formVisible ? (
                                    <CloseOutlined />
                                ) : (
                                    <PlusOutlined />
                                )
                            }
                            onClick={() => setFormVisible(!formVisible)}
                        >
                            {formVisible ? "Anuluj" : "Dodaj"}
                        </Button>
                    </div>
                </Col>
                {formVisible && (
                    <Col span={24}>
                        <Card title="Projekt" style={{ width: "100%" }}>
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
            </Row>
        </>
    );
}

export default Research;
