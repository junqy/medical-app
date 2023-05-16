import React, { useState } from "react";
import {
    DeleteFilled,
    EditFilled,
    CheckOutlined,
    PlayCircleOutlined,
    UnorderedListOutlined
} from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import CommonTable from "../common_table/CommonTable";
import { serializeDate } from "../../utils/serializers/projectsSerializer";
import CommonForm from "../common_form/CommonForm";
import useColumnGenerator from "../../hooks/useColumnGenerator";
import { projectsColumns } from "../../data/projectsData";

function ProjectsTable({
    projects,
    removeProject,
    editProject,
    finishProject,
    inputs,
    formSubmited,
    setFormSubmited,
    setSelectedProject,
    selectedProject
}) {
    const generateColumns = useColumnGenerator();
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

    const handleRemove = (id) => {
        if (id === selectedProject) {
            setSelectedProject(null)
        }
        removeProject(id)
    }

    const columns = [
        ...generateColumns(projectsColumns),
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
                        shape="circle"
                        icon={
                            record.isFinished ? (
                                <PlayCircleOutlined />
                            ) : (
                                <CheckOutlined />
                            )
                        }
                        onClick={() => finishProject(record)}
                    />
                    <Button
                        shape="circle"
                        icon={<UnorderedListOutlined />}
                        onClick={() => setSelectedProject(record.id)}
                    />
                    <Button
                        danger
                        shape="circle"
                        icon={<DeleteFilled />}
                        onClick={() => handleRemove(record.id)}
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
