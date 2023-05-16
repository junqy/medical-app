import { Button, Form, Input, Select, Space } from "antd";
import React, { useEffect, useState } from "react";

const { Option } = Select;

function OrderResultForm({
    orders,
    research,
    handleSubmit,
    formSubmited,
    setFormSubmited,
    ordersResults,
}) {
    const [form] = Form.useForm();
    const [selectDisabled, setSelectDisabled] = useState(true);
    const [researchData, setResearchData] = useState(research);

    const filterResearch = (orderId) => {
        const orderResearch = orders.find(
            (order) => String(order.id) === orderId
        ).research;
        const createdResults = ordersResults
            .filter((orderResult) => orderResult.orderId === orderId)
            .map((orderResult) => orderResult.researchId);
        const filteredResearch = research
            .filter((research) => orderResearch.includes(String(research.id)))
            .filter(
                (research) => !createdResults.includes(String(research.id))
            );
        setResearchData(filteredResearch);
    };

    const onValuesChange = (changedValues, allValues) => {
        if (Object.keys(changedValues)[0] === "orderId") {
            form.setFieldsValue({ researchId: undefined });
            filterResearch(String(allValues.orderId));
        }
        if (allValues.orderId != undefined && allValues.orderId != "") {
            setSelectDisabled(false);
        } else {
            setSelectDisabled(true);
        }
    };

    const onFinish = (values) => {
        handleSubmit(values);
        if (formSubmited) {
            form.resetFields();
            setFormSubmited(false);
        }
    };

    return (
        <Form
            name="order_form"
            onFinish={onFinish}
            form={form}
            onValuesChange={onValuesChange}
        >
            <Form.Item
                name="orderId"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Proszę wybrać zlecenie.",
                    },
                ]}
            >
                <Select placeholder="Zlecenie">
                    {orders.map((order) => (
                        <Option
                            key={order.key}
                            value={`${order.id}`}
                        >{`Zlecenie [${order.id}]`}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="researchId"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Proszę wybrać badanie.",
                    },
                ]}
            >
                <Select placeholder="Badanie" disabled={selectDisabled}>
                    {researchData?.map((research) => (
                        <Option key={research.key} value={`${research.id}`}>
                            {`[${research.id}] ${research.name}`}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="result"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Proszę wprowadzić wynik.",
                    },
                ]}
            >
                <Input placeholder="Wynik" />
            </Form.Item>

            <Form.Item>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Zatwierdź
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );
}
export default OrderResultForm;
