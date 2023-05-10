import React, { useState } from "react";
import { Col, Row, Button, Card } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import PatientsTable from "../../components/patients/PatientsTable";
import CommonForm from "../../components/common_form/CommonForm";
import { postPatient } from "../../api/services/patientsService";
import { serializePatient } from "../../utils/serializers/patientsSerializer";

const inputs = [
    {
        type: "text",
        name: "name",
        label: "Imię",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić imię.",
            },
        ],
    },
    {
        type: "text",
        name: "surname",
        label: "Nazwisko",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić nazwisko.",
            },
        ],
    },
    {
        type: "date",
        name: "birthDate",
        label: "Data urodzenia",
        rules: [
            {
                type: "object",
                required: true,
                message: "Proszę wprowadzić datę urodzenia.",
            },
        ],
    },
    {
        type: "text",
        name: "country",
        label: "Kraj",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić kraj.",
            },
        ],
    },
    {
        type: "text",
        name: "city",
        label: "Miasto",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić miasto.",
            },
        ],
    },
    {
        type: "text",
        name: "street",
        label: "Ulica",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić ulicę.",
            },
        ],
    },
    {
        type: "text",
        name: "building",
        label: "Budynek",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić budynek.",
            },
        ],
    },
    {
        type: "text",
        name: "apartment",
        label: "Mieszkanie",
    },
    {
        type: "select",
        name: "gender",
        label: "Płeć",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić płeć.",
            },
        ],
        options: [
            { value: "K", label: "Kobieta" },
            { value: "M", label: "Mężczyzna" },
        ],
    },
    {
        type: "text",
        name: "phoneNumber",
        label: "Numer Telefonu",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić numer telefonu.",
            },
        ],
    },
    {
        type: "text",
        name: "martialStatus",
        label: "Stan Cywilny",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić stan cywilny.",
            },
        ],
    },
    {
        type: "text",
        name: "profession",
        label: "Zawód",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić zawód.",
            },
        ],
    },
];

function Patients({ patients, setPatients, promptError }) {
    const [formVisible, setFormVisible] = useState(false);

    const addPatient = async (data) => {
        const serializedPatient = serializePatient(data)
        await postPatient(serializedPatient).then((response) => console.log(response))
    }

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
                            icon={formVisible ? <CloseOutlined /> : <PlusOutlined />}
                            onClick={() => setFormVisible(!formVisible)}
                        >
                            {formVisible ? "Anuluj" : "Dodaj"}
                        </Button>
                    </div>
                </Col>
                {formVisible && (
                    <Card title="Pacjent" style={{ width: "100%", marginBottom: "20px" }}>
                        <CommonForm inputs={inputs} addItem={addPatient}/>
                    </Card>
                )}
                <Col span={24}>
                    <PatientsTable
                        patients={patients}
                        setPatients={setPatients}
                        promptError={promptError}
                    />
                </Col>
            </Row>
        </>
    );
}

export default Patients;
