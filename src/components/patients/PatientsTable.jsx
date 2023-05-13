import { Button, Modal, Space } from "antd";
import CommonTable from "../common_table/CommonTable";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useState } from "react";
import CommonForm from "../common_form/CommonForm";
import { serializeDate } from "../../utils/serializers/patientsSerializer";
import useColumnGenerator from "../../hooks/useColumnGenerator";
import { patientsColumns } from "./patientsData";

function PatientsTable({
    patients,
    removePatient,
    editPatient,
    inputs,
    formSubmited,
    setFormSubmited,
}) {
    const generateColumns = useColumnGenerator();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editItem, setEditItem] = useState(null)

    const handleEdit = (data) => {
        setEditItem(serializeDate(data))
        setIsModalOpen(true)
    }

    const onClose = () => {
        setEditItem(null)
        setIsModalOpen(false)
    }

    const columns = [
        ...generateColumns(patientsColumns),
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
                        onClick={() => removePatient(record.id)}
                    />
                </Space>
            ),
        },
    ]

    return (
        <>
            <CommonTable data={patients} columns={columns} />
            <Modal
                open={isModalOpen}
                title="Edytuj dane pacjenta"
                onCancel={() => onClose()}
                footer={null}
            >
                <CommonForm
                    inputs={inputs}
                    formSubmited={formSubmited}
                    setFormSubmited={setFormSubmited}
                    handleSubmit={editPatient}
                    editItem={editItem}
                    onCloseModal={onClose}
                />
            </Modal>
        </>
    );
}

export default PatientsTable;
