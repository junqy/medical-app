import { Button, Space } from "antd";
import CommonTable from "../common_table/CommonTable";
import { DeleteFilled, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import useColumnGenerator from "../../hooks/useColumnGenerator";
import { patientsColumns } from "../patients/patientsData";
import React, { useEffect, useState } from "react";

function PatientsInProjectTable({ patients, selectedProject, changeAgreement }) {
    const generateColumns = useColumnGenerator();
    const [patientsData, setPatientsData] = useState([]);

    const filterPatients = () => {
        const filteredPatients = patients?.filter((patient) =>
            selectedProject?.patients.includes(String(patient.id))
        );
        filteredPatients.map(
            (patient) =>
                (patient.agreement = selectedProject?.agreedPatients.includes(
                    String(patient.id)
                )
                    ? true
                    : false)
        );
        setPatientsData(filteredPatients);
    };

    const handleAgreement = (id) => {
        if (selectedProject?.agreedPatients.includes(String(id))) {
            const filteredPatients = selectedProject.agreedPatients.filter((item) => item !== String(id))
            changeAgreement({
                ...selectedProject,
                agreedPatients: filteredPatients,
            })
        } else {
            changeAgreement({
                ...selectedProject,
                agreedPatients:
                    [...selectedProject.agreedPatients, String(id)]
            })
        }
    }

    useEffect(() => {
        filterPatients();
    }, [selectedProject]);

    const columns = [
        ...generateColumns(patientsColumns),
        {
            title: "Zgoda",
            dataIndex: "agreement",
            key: "agreement",
            sorter: (a, b) => a.name.localeCompare(b.name),
            render: (record) => (record === true ? "Tak" : "Nie"),
        },
        {
            title: "Opcje",
            key: "options",
            render: (record) => (
                <Space size="middle">
                    <Button
                        shape="circle"
                        icon={
                            selectedProject?.agreedPatients.includes(
                                String(record.id)
                            ) ? (
                                <CloseOutlined />
                            ) : (
                                <CheckOutlined />
                            )
                        }
                        onClick={() => handleAgreement(record.id)}
                    />
                    <Button danger shape="circle" icon={<DeleteFilled />} />
                </Space>
            ),
        },
    ];

    return (
        <>
            <CommonTable
                data={patientsData}
                columns={columns}
                isAgreement={true}
            />
        </>
    );
}

export default PatientsInProjectTable;
