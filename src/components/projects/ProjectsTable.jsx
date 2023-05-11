import React, { useState } from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import useTableFilter from "../../hooks/useTableFilter";
import CommonTable from "../common_table/CommonTable";
import { serializeDate } from "../../utils/serializers/projectsSerializer";
import CommonForm from "../common_form/CommonForm";

function ProjectsTable({
    projects,
    removeProject,
    editProject,
    inputs,
    formSubmited,
    setFormSubmited,
}) {
    const getColumnSearchProps = useTableFilter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editItem, setEditItem] = useState(null);

    const handleEdit = (data) => {
        setEditItem(serializeDate(data));
        setIsModalOpen(true);
    };

    const onClose = () => {
        setEditItem(null);
        setIsModalOpen(false);
    };

    const columns = [
        {
            title: "Nazwa",
            dataIndex: "name",
            key: "name",
            ...getColumnSearchProps("name", "Nazwa"),
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Założyciel",
            dataIndex: "founder",
            key: "founder",
            ...getColumnSearchProps("founder", "Założyciel"),
            sorter: (a, b) => a.founder.localeCompare(b.founder),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Data Startu",
            dataIndex: "startDate",
            key: "startDate",
            ...getColumnSearchProps("startDate", "Data Startu"),
            sorter: (a, b) => Date.parse(a.startDate) - Date.parse(b.startDate),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Data Zakończenia",
            dataIndex: "endDate",
            key: "endDate",
            ...getColumnSearchProps("endDate", "Data Zakończenia"),
            sorter: (a, b) => Date.parse(a.endDate) - Date.parse(b.endDate),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Typ",
            dataIndex: "type",
            key: "type",
            ...getColumnSearchProps("type", "Typ"),
            sorter: (a, b) => a.type.localeCompare(b.type),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Zakończony",
            dataIndex: "isFinished",
            key: "isFinished",
            ...getColumnSearchProps("isFinished", "Zakończony"),
            sorter: (a, b) => a.isFinished - b.isFinished,
            sortDirections: ["descend", "ascend"],
            render: (record) => (record === true ? "Tak" : "Nie"),
        },
        {
            title: "Liczba Pacjentów",
            dataIndex: "patients",
            key: "patients",
            ...getColumnSearchProps("patients", "Ulica"),
            sorter: (a, b) => a.patients - b.patients,
            sortDirections: ["descend", "ascend"],
            render: (record) => record?.length,
        },
        {
            title: "Opcje",
            key: "options",
            render: (record) => (
                <Space size="middle">
                    <Button
                        shape="circle"
                        icon={<EditFilled />}
                        onClick={() => handleEdit(record)}
                    />
                    <Button
                        danger
                        shape="circle"
                        icon={<DeleteFilled />}
                        onClick={() => removeProject(record.id)}
                    />
                </Space>
            ),
        },
    ];

    return (
        <>
            <CommonTable data={projects} columns={columns} />
            <Modal
                open={isModalOpen}
                title="Edytuj dane projektu"
                onCancel={() => onClose()}
                footer={null}
            >
                <CommonForm
                    inputs={inputs}
                    formSubmited={formSubmited}
                    setFormSubmited={setFormSubmited}
                    handleSubmit={editProject}
                    editItem={editItem}
                    onCloseModal={onClose}
                />
            </Modal>
        </>
    );
}

export default ProjectsTable;
