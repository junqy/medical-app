import { Button, Space } from "antd";
import CommonTable from "../common_table/CommonTable";
import { DeleteFilled, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import useColumnGenerator from "../../hooks/useColumnGenerator";
import { patientsColumns } from "../../data/patientsData";
import { filterProject } from "../../utils/filterProject";
import React, { useEffect, useState } from "react";

function PatientsInProjectTable({
    patients,
    selectedProject,
    changeAgreement,
    projects,
}) {
    const generateColumns = useColumnGenerator();
    const [patientsData, setPatientsData] = useState([]);

    const filterPatients = () => {
        const filteredProject = filterProject(projects, selectedProject);
        const filteredPatients = patients?.filter((patient) =>
            filteredProject?.patients.includes(String(patient.id))
        );
        filteredPatients.map(
            (patient) =>
                (patient.agreement = filteredProject?.agreedPatients.includes(
                    String(patient.id)
                )
                    ? true
                    : false)
        );
        setPatientsData(filteredPatients);
    };

    const handleAgreement = (id) => {
        const filteredProject = filterProject(projects, selectedProject);
        if (filteredProject?.agreedPatients.includes(String(id))) {
            const filteredPatients = filteredProject.agreedPatients.filter(
                (item) => item !== String(id)
            );
            changeAgreement({
                ...filteredProject,
                agreedPatients: filteredPatients,
            });
        } else {
            changeAgreement({
                ...filteredProject,
                agreedPatients: [...filteredProject.agreedPatients, String(id)],
            });
        }
    };

    const removeMembership = (id) => {
        const filteredProject = filterProject(projects, selectedProject);
        const filteredPatients = filteredProject.patients.filter(
            (item) => item !== String(id)
        );
        changeAgreement({
            ...filteredProject,
            patients: filteredPatients,
        });
    };

    useEffect(() => {
        filterPatients();
    }, [selectedProject, changeAgreement]);

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
                            filterProject(
                                projects,
                                selectedProject
                            )?.agreedPatients.includes(String(record.id)) ? (
                                <CloseOutlined />
                            ) : (
                                <CheckOutlined />
                            )
                        }
                        onClick={() => handleAgreement(record.id)}
                    />
                    <Button
                        danger
                        shape="circle"
                        icon={<DeleteFilled />}
                        onClick={() => removeMembership(record.id)}
                    />
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
