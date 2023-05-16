import React, { useState } from "react";
import { Col, Row, Button, Card, Divider } from "antd";
import OrdersTable from "../../components/orders/OrdersTable";
import {
    deleteOrder,
    postOrder,
    updateOrder,
} from "../../api/services/ordersService";
import errorHandler from "../../api/errorHandler";
import { serializeOrder, serializeToFinish } from "../../utils/serializers/ordersSerializer";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import OrderForm from "../../components/orders/OrderForm";
import OrderResearchTable from "../../components/orders/OrderResearchTable";

function Orders({
    orders,
    setOrders,
    promptError,
    promptMessage,
    patients,
    projects,
    research,
    getAllOrdersResults
}) {
    const [formVisible, setFormVisible] = useState(false);
    const [formSubmited, setFormSubmited] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const addOrder = async (data) => {
        const serializedOrder = serializeOrder(data);
        await postOrder(serializedOrder)
            .then((response) => {
                const allOrders = [...orders, response.data];
                setOrders(allOrders);
                setFormSubmited(true);
                setFormVisible(false);
            })
            .catch((err) => errorHandler(err, promptError));
    };

    const removeOrder = async (id) => {
        await deleteOrder(id)
            .then(() => {
                const ordersList = orders.filter((order) => order.id !== id);
                setOrders(ordersList);
            })
            .catch((err) => errorHandler(err, promptError));
            getAllOrdersResults();
    };

    const editOrder = async (data) => {
        const seralizedOrder = serializeOrder(data);
        await updateOrder(seralizedOrder.id, seralizedOrder)
            .then((response) => {
                setOrders(
                    orders.map((order) =>
                        order.id === seralizedOrder.id
                            ? { ...response.data }
                            : order
                    )
                );
            })
            .catch((err) => errorHandler(err, promptError));
    };

    const finishOrder = async (data) => {
        const serializedOrder = serializeToFinish(data);
        await updateOrder(serializedOrder.id, serializedOrder)
            .then((response) => {
                setOrders(
                    orders.map((order) =>
                        order.id === serializedOrder.id
                            ? { ...response.data }
                            : order
                    )
                );
            })
            .catch((err) => errorHandler(err, promptError));
    };

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button
                            icon={
                                formVisible ? (
                                    <CloseOutlined />
                                ) : (
                                    <PlusOutlined />
                                )
                            }
                            onClick={() => setFormVisible(!formVisible)}
                        >
                            {formVisible ? "Anuluj" : "Dodaj"}
                        </Button>
                    </div>
                </Col>
                {formVisible && (
                    <Col span={24}>
                        <Card title="Zlecenie" style={{ width: "100%" }}>
                            <OrderForm
                                patients={patients}
                                projects={projects}
                                research={research}
                                handleSubmit={addOrder}
                                formSubmited={formSubmited}
                                setFormSubmited={setFormSubmited}
                            />
                        </Card>
                    </Col>
                )}
                <Col span={24}>
                    <OrdersTable
                        orders={orders}
                        projects={projects}
                        patients={patients}
                        research={research}
                        removeOrder={removeOrder}
                        editOrder={editOrder}
                        finishOrder={finishOrder}
                        promptMessage={promptMessage}
                        formSubmited={formSubmited}
                        setFormSubmited={setFormSubmited}
                        setSelectedOrder={setSelectedOrder}
                    />
                </Col>
                {!!selectedOrder && (
                    <>
                        <Col span={24}>
                            <Divider/>
                        </Col>
                        <Col span={24}>
                            <OrderResearchTable
                                selectedOrder={selectedOrder}
                                research={research}
                                orders={orders}
                            />
                        </Col>
                    </>
                )}
            </Row>
        </>
    );
}

export default Orders;
