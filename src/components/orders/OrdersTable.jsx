import React, { useEffect, useState } from "react";
import CommonTable from "../common_table/CommonTable";
import useColumnGenerator from "../../hooks/useColumnGenerator";
import { Space, Button, Modal } from "antd";
import { ordersColumns } from "../../data/ordersData";
import {
    EditFilled,
    PlayCircleOutlined,
    CheckOutlined,
    UnorderedListOutlined,
    DeleteFilled,
} from "@ant-design/icons";
import { serializeDate } from "../../utils/serializers/ordersSerializer";
import OrderForm from "./OrderForm";

function OrdersTable({
    orders,
    projects,
    patients,
    research,
    removeOrder,
    promptMessage,
    formSubmited,
    setFormSubmited,
    editOrder,
    finishOrder,
    setSelectedOrder
}) {
    const generateColumns = useColumnGenerator();
    const [data, setData] = useState([]);
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

    const assembleData = () => {
        setData(
            orders.map((order) => ({
                ...order,
                projectName: projects.find(
                    (project) => String(project.id) === order.projectId
                )?.name,
                patientName: `${
                    patients.find(
                        (patient) => String(patient.id) === order.patientId
                    )?.name
                } ${
                    patients.find(
                        (patient) => String(patient.id) === order.patientId
                    )?.surname
                }`,
            }))
        );
    };

    const handleDelete = (data) => {
        if (data.isFinished) {
            promptMessage("Nie można wycofać ukończonego zlecenia.");
        } else {
            removeOrder(data.id);
        }
    };

    useEffect(() => {
        assembleData();
    }, [projects, patients, orders]);

    const columns = [
        ...generateColumns(ordersColumns),
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
                        onClick={() => finishOrder(record)}
                    />
                    <Button
                        shape="circle"
                        icon={<UnorderedListOutlined />}
                        onClick={() => setSelectedOrder(record.id)}
                    />
                    <Button
                        danger
                        shape="circle"
                        icon={<DeleteFilled />}
                        onClick={() => handleDelete(record)}
                    />
                </Space>
            ),
        },
    ];
    return (
        <>
            <CommonTable data={data} columns={columns} />
            <Modal
                open={isModalOpen}
                title="Edytuj dane projektu"
                onCancel={() => onClose()}
                footer={null}
            >
                <OrderForm
                    projects={projects}
                    patients={patients}
                    research={research}
                    handleSubmit={editOrder}
                    formSubmited={formSubmited}
                    setFormSubmited={setFormSubmited}
                    editItem={editItem}
                    onCloseModal={onClose}
                />
            </Modal>
        </>
    );
}

export default OrdersTable;
