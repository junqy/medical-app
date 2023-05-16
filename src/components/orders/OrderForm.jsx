import { Button, Form, Select, Space } from "antd";
import React, { useEffect, useState } from "react";

const { Option } = Select;

function OrderForm({
    projects,
    patients,
    research,
    handleSubmit,
    formSubmited,
    setFormSubmited,
    editItem,
    onCloseModal,
}) {
    const [form] = Form.useForm();
    const [selectDisabled, setSelectDisabled] = useState(true);
    const [projectsData, setProjectsData] = useState(projects);

    const filterProjects = (patientId) => {
        const filteredProjects = projects.filter((project) =>
            project.agreedPatients.includes(patientId)
        );
        setProjectsData(filteredProjects);
    };

    const onValuesChange = (changedValues, allValues) => {
        if (Object.keys(changedValues)[0] === "patientId") {
            form.setFieldsValue({ projectId: undefined });
        }
        if (allValues.patientId != undefined && allValues.patientId != "") {
            setSelectDisabled(false);
            filterProjects(String(allValues.patientId));
        } else {
            setSelectDisabled(true);
        }
    };

    const onFinish = (values) => {
        handleSubmit(editItem ? { ...editItem, ...values } : values);
        if (editItem) {
            form.resetFields();
            onCloseModal();
        }
        if (formSubmited) {
            form.resetFields();
            setFormSubmited(false);
        }
    };

    useEffect(() => {
        form.resetFields();
    }, [editItem]);

    return (
        <Form
            name="order_form"
            onFinish={onFinish}
            form={form}
            onValuesChange={onValuesChange}
            initialValues={editItem}
        >
            <Form.Item
                name="patientId"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Proszę wybrać pacjenta.",
                    },
                ]}
            >
                <Select placeholder="Pacjent">
                    {patients.map((patient) => (
                        <Option
                            key={patient.key}
                            value={`${patient.id}`}
                        >{`[${patient.id}] ${patient.name} ${patient.surname}`}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="projectId"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Proszę wybrać projekt.",
                    },
                ]}
            >
                <Select placeholder="Projekt" disabled={selectDisabled}>
                    {projectsData?.map((project) => (
                        <Option key={project.key} value={`${project.id}`}>
                            {`[${project.id}] ${project.name}`}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="research"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Proszę wybrać badania.",
                        type: "array",
                    },
                ]}
            >
                <Select mode="multiple" placeholder="Badania">
                    {research.map((research) => (
                        <Option key={research.key} value={`${research.id}`}>
                            {`[${research.id}] ${research.name}`}
                        </Option>
                    ))}
                </Select>
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
export default OrderForm;
