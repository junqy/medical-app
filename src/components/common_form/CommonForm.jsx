import { CalendarOutlined } from "@ant-design/icons";
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
    InputNumber,
    Grid,
} from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
const { Option } = Select;
const { useBreakpoint } = Grid;

const CommonForm = ({
    inputs,
    handleSubmit,
    formSubmited,
    setFormSubmited,
    editItem,
    onCloseModal,
}) => {
    const breakpoints = useBreakpoint();
    const [form] = Form.useForm();
    const dateFormat = "YYYY-MM-DD";

    useEffect(() => {
        form.resetFields();
    }, [editItem]);

    const onFinish = (values) => {
        handleSubmit(
            editItem
                ? { ...editItem, ...values }
                : values
        );
        if (editItem) {
            form.resetFields();
            onCloseModal();
        }
        if (formSubmited) {
            form.resetFields();
            setFormSubmited(false);
        }
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
                        format={dateFormat}
                        disabledDate={
                            input.name === "birthDate" &&
                            ((current) => current.isAfter(dayjs()))
                        }
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
        } else if (input.type === "number") {
            return (
                <Form.Item
                    key={input.label}
                    name={input.name}
                    rules={input.rules}
                >
                    <InputNumber
                        placeholder={input.label}
                        style={{
                            width: "100%",
                        }}
                        min={0}
                    />
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
            initialValues={editItem}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: breakpoints.xs
                        ? "1fr 1fr"
                        : "1fr 1fr 1fr",
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
