import React from "react";
import { Col, Row } from "antd";
import PatientsTable from "../../components/patients/PatientsTable";

function Patients({ patients, setPatients }) {
    return (
        <>
            <Row>
                <Col span={24}>
                    <PatientsTable
                        patients={patients}
                        setPatients={setPatients}
                    />
                </Col>
            </Row>
        </>
    );
}

export default Patients;
