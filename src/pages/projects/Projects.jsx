import React, { useState } from "react";
import { Col, Row, Button, Card, Divider } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import PatientsTable from "../../components/patients/PatientsTable";
import CommonForm from "../../components/common_form/CommonForm";
import errorHandler from "../../api/errorHandler";
import { inputs } from "../../data/projectsInputs";
import ProjectsTable from "../../components/projects/ProjectsTable";
import {
    deleteProject,
    postProject,
    updateProject,
} from "../../api/services/projectsService";
import {
    serializeProject,
    serializeToFinish,
} from "../../utils/serializers/projectsSerializer";
import PatientsInProjectTable from "../../components/projects/PatientsInProjectTable";

function Projects({ projects, setProjects, promptError, patients }) {
    const [formVisible, setFormVisible] = useState(false);
    const [formSubmited, setFormSubmited] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const addProject = async (data) => {
        const serializedProject = serializeProject(data);
        await postProject(serializedProject)
            .then((response) => {
                const allProjects = [...projects, response.data];
                setProjects(allProjects);
                setFormSubmited(true);
                setFormVisible(false);
            })
            .catch((err) => errorHandler(err, promptError));
    };

    const removeProject = async (id) => {
        await deleteProject(id)
            .then(() => {
                const projectsList = projects.filter(
                    (project) => project.id !== id
                );
                setProjects(projectsList);
            })
            .catch((err) => errorHandler(err, promptError));
    };

    const editProject = async (data) => {
        const serializedProject = serializeProject(data);
        await updateProject(serializedProject.id, serializedProject)
            .then((response) => {
                setProjects(
                    projects.map((project) =>
                        project.id === serializedProject.id
                            ? { ...response.data }
                            : project
                    )
                );
            })
            .catch((err) => errorHandler(err, promptError));
    };

    const changeAgreement = async (data) => {
        await updateProject(data.id, data)
            .then((response) => {
                setProjects(
                    projects.map((project) =>
                        project.id === data.id
                            ? { ...response.data }
                            : project
                    )
                );
                setSelectedProject({...response.data})
            })
            .catch((err) => errorHandler(err, promptError));
    };

    const finishProject = async (data) => {
        const serializedProject = serializeToFinish(data);
        await updateProject(serializedProject.id, serializedProject)
            .then((response) => {
                setProjects(
                    projects.map((project) =>
                        project.id === serializedProject.id
                            ? { ...response.data }
                            : project
                    )
                );
            })
            .catch((err) => errorHandler(err, promptError));
    };

    return (
        <>
            <Row>
                <Col span={24}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginBottom: "10px",
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
                    <Card
                        title="Pacjent"
                        style={{ width: "100%", marginBottom: "20px" }}
                    >
                        <CommonForm
                            inputs={inputs}
                            handleSubmit={addProject}
                            formSubmited={formSubmited}
                            setFormSubmited={setFormSubmited}
                        />
                    </Card>
                )}
                <Col span={24}>
                    <ProjectsTable
                        projects={projects}
                        removeProject={removeProject}
                        editProject={editProject}
                        finishProject={finishProject}
                        inputs={inputs}
                        formSubmited={formSubmited}
                        setFormSubmited={setFormSubmited}
                        setSelectedProject={setSelectedProject}
                    />
                </Col>
                {!!selectedProject && (
                    <>
                        <Col span={24}>
                            <Divider>{selectedProject?.name}</Divider>
                        </Col>
                        <Col span={24}>
                            <PatientsInProjectTable
                                selectedProject={selectedProject}
                                patients={patients}
                                changeAgreement={changeAgreement}
                            />
                        </Col>
                    </>
                )}
            </Row>
        </>
    );
}

export default Projects;
