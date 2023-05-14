import React, { useState } from "react";
import useColumnGenerator from "../../hooks/useColumnGenerator";
import { researchColumns } from "../../data/researchData";
import { Button, Space, Modal } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import CommonTable from "../common_table/CommonTable";
import CommonForm from "../common_form/CommonForm";

function ResearchTable({
    research,
    removeResearch,
    formSubmited,
    setFormSubmited,
    editResearch,
    inputs,
}) {
    const generateColumns = useColumnGenerator();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editItem, setEditItem] = useState(null);

    const handleEdit = (data) => {
        setEditItem(data);
        setIsModalOpen(true);
    };

    const onClose = () => {
        setEditItem(null);
        setIsModalOpen(false);
    };

    const columns = [
        ...generateColumns(researchColumns),
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
                        onClick={() => removeResearch(record.id)}
                    />
                </Space>
            ),
        },
    ];

    return (
        <>
            <CommonTable data={research} columns={columns} />
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
                    handleSubmit={editResearch}
                    editItem={editItem}
                    onCloseModal={onClose}
                />
            </Modal>
        </>
    );
}

export default ResearchTable;
