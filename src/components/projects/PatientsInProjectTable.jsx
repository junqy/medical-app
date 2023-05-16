import { Button, Space } from "antd";
import CommonTable from "../common_table/CommonTable";
import { DeleteFilled, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import useColumnGenerator from "../../hooks/useColumnGenerator";
import { patientsColumns } from "../../data/patientsData";
import { filterData } from "../../utils/filterData";
import React from "react";

function PatientsInProjectTable({
    patients,
    selectedProject,
    changeAgreement,
    projects,
}) {
    const generateColumns = useColumnGenerator();

    const filterPatients = () => {
        const filteredProject = filterData(projects, selectedProject);
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
        return filteredPatients;
    };

    const handleAgreement = (id) => {
        const filteredProject = filterData(projects, selectedProject);
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
        const filteredProject = filterData(projects, selectedProject);
        const filteredPatients = filteredProject.patients.filter(
            (item) => item !== String(id)
        );
        const filteredPatientsAgreement = filteredProject.agreedPatients.filter(
            (item) => item !== String(id)
        );
        changeAgreement({
            ...filteredProject,
            patients: filteredPatients,
            agreedPatients: filteredPatientsAgreement,
        });
    };

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
                            filterData(
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
                data={filterPatients()}
                columns={columns}
                isAgreement={true}
            />
        </>
    );
}

export default PatientsInProjectTable;
