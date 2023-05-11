import { Button, Modal, Space } from "antd";
import useTableFilter from "../../hooks/useTableFilter";
import CommonTable from "../common_table/CommonTable";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useState } from "react";
import CommonForm from "../common_form/CommonForm";
import { serializeDate } from "../../utils/serializers/patientsSerializer";

function PatientsTable({
    patients,
    setPatients,
    promptError,
    removePatient,
    editPatient,
    inputs,
    formSubmited,
    setFormSubmited,
}) {
    const getColumnSearchProps = useTableFilter();
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
        {
            title: "Imię",
            dataIndex: "name",
            key: "name",
            ...getColumnSearchProps("name", "Imię"),
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Nazwisko",
            dataIndex: "surname",
            key: "surname",
            ...getColumnSearchProps("surname", "Nazwisko"),
            sorter: (a, b) => a.surname.localeCompare(b.surname),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Data Urodzenia",
            dataIndex: "birthDate",
            key: "birthDate",
            ...getColumnSearchProps("birthDate", "Data Urodzenia"),
            sorter: (a, b) => Date.parse(a.birthDate) - Date.parse(b.birthDate),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Kraj",
            dataIndex: "country",
            key: "country",
            ...getColumnSearchProps("country", "Kraj"),
            sorter: (a, b) => a.country.localeCompare(b.country),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Miasto",
            dataIndex: "city",
            key: "city",
            ...getColumnSearchProps("city", "Miasto"),
            sorter: (a, b) => a.city.localeCompare(b.city),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Ulica",
            dataIndex: "street",
            key: "street",
            ...getColumnSearchProps("street", "Ulica"),
            sorter: (a, b) => a.street.localeCompare(b.street),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Budynek",
            dataIndex: "building",
            key: "building",
            width: "5%",
            ...getColumnSearchProps("building", "Budynek"),
            sorter: (a, b) => a.building - b.building,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Mieszkanie",
            dataIndex: "apartment",
            key: "apartment",
            width: "5%",
            ...getColumnSearchProps("apartment", "Mieszaknie"),
            sorter: (a, b) => a.apartment - b.apartment,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Płeć",
            dataIndex: "gender",
            key: "gender",
            width: "5%",
            ...getColumnSearchProps("gender", "Płeć"),
            sorter: (a, b) => a.gender.localeCompare(b.gender),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Numer Telefonu",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
            ...getColumnSearchProps("phoneNumber", "Numer Telefonu"),
            sorter: (a, b) => a.phoneNumber - b.phoneNumber,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Stan Cywilny",
            dataIndex: "martialStatus",
            key: "martialStatus",
            ...getColumnSearchProps("martialStatus", "Stan Cywilny"),
            sorter: (a, b) => a.martialStatus.localeCompare(b.martialStatus),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Zawód",
            dataIndex: "profession",
            key: "profession",
            ...getColumnSearchProps("profession", "Zawód"),
            sorter: (a, b) => a.profession.localeCompare(b.profession),
            sortDirections: ["descend", "ascend"],
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
                        onClick={() => removePatient(record.id)}
                    />
                </Space>
            ),
        },
    ];

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
