import { CalendarOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select, Space } from "antd";
import { useState } from "react";
const { Option } = Select;

const CommonForm = ({ inputs, addItem }) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        addItem(values)
    };

    const items = inputs.map((input) => {
        if (input.type === "text") {
            return (
                <Form.Item
                    key={input.label}
                    name={input.name}
                    rules={input.rules}
                >
                    <Input placeholder={input.label} />
                </Form.Item>
            );
        } else if (input.type === "date") {
            return (
                <Form.Item
                    key={input.label}
                    name={input.name}
                    rules={input.rules}
                >
                    <DatePicker
                        placeholder={input.label}
                        suffixIcon={
                            <CalendarOutlined style={{ color: "#FFF" }} />
                        }
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            );
        } else if (input.type === "select") {
            return (
                <Form.Item
                    key={input.label}
                    name={input.name}
                    rules={input.rules}
                >
                    <Select placeholder={input.label}>
                        {input.options.map((option) => (
                            <Option key={option.value} value={option.value}>
                                {option.label}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            );
        }
    });
    return (
        <Form
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            style={{ width: "100%" }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    columnGap: "20px",
                }}
            >
                {items}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Zatwierdź
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};

export default CommonForm;
