import React, { useState } from "react";
import { Col, Row, Button, Card } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import PatientsTable from "../../components/patients/PatientsTable";
import CommonForm from "../../components/common_form/CommonForm";
import {
    deletePatient,
    postPatient,
    updatePatient,
} from "../../api/services/patientsService";
import { serializePatient } from "../../utils/serializers/patientsSerializer";
import errorHandler from "../../api/errorHandler";
import { inputs } from "../../data/patientsInputs";

function Patients({ patients, setPatients, promptError }) {
    const [formVisible, setFormVisible] = useState(false);
    const [formSubmited, setFormSubmited] = useState(false);

    const addPatient = async (data) => {
        const serializedPatient = serializePatient(data);
        await postPatient(serializedPatient)
            .then((response) => {
                const allPatients = [...patients, response.data];
                setPatients(allPatients);
                setFormSubmited(true);
                setFormVisible(false);
            })
            .catch((err) => errorHandler(err, promptError));
    };

    const removePatient = async (id) => {
        await deletePatient(id)
            .then(() => {
                const patientsList = patients.filter(
                    (patient) => patient.id !== id
                );
                setPatients(patientsList);
            })
            .catch((err) => errorHandler(err, promptError));
    };

    const editPatient = async (data) => {
        const serializedPatient = serializePatient(data);
        await updatePatient(serializedPatient.id, serializedPatient)
            .then((response) => {
                setPatients(
                    patients.map((patient) =>
                        patient.id === serializedPatient.id
                            ? { ...response.data }
                            : patient
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
                            handleSubmit={addPatient}
                            formSubmited={formSubmited}
                            setFormSubmited={setFormSubmited}
                        />
                    </Card>
                )}
                <Col span={24}>
                    <PatientsTable
                        patients={patients}
                        setPatients={setPatients}
                        promptError={promptError}
                        removePatient={removePatient}
                        editPatient={editPatient}
                        inputs={inputs}
                        formSubmited={formSubmited}
                        setFormSubmited={setFormSubmited}
                    />
                </Col>
            </Row>
        </>
    );
}

export default Patients;
