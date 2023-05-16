import { Button, Select, Space } from "antd";
import { useState } from "react";
import { filterData } from "../../utils/filterData";
const { Option } = Select;

function PatientsSelect({
    patients,
    placeholder,
    addPatients,
    projects,
    selectedProject,
}) {
    const [patientsToAdd, setPatientsToAdd] = useState([]);

    const handleAddPatients = () => {
        const filteredProject = filterData(projects, selectedProject);
        addPatients({
            ...filteredProject,
            patients: [...filteredProject.patients, ...patientsToAdd],
        });
    };

    const handleChange = (value) => {
        const string = value.toString()
        const convertedArray = string.split(',')
        setPatientsToAdd(convertedArray);
    };

    const options = patients.map((item) => (
        <Option
            value={item.id}
            label={`${item.name} ${item.surname}`}
            key={item.key}
            disabled={
                filterData(projects, selectedProject).patients.includes(
                    String(item.id)
                )
                    ? true
                    : false
            }
        >
            <Space>
                {item.name}
                {item.surname}
                {item.id}
            </Space>
        </Option>
    ));

    return (
        <>
            <Select
                mode="multiple"
                style={{
                    width: "100%",
                }}
                placeholder={placeholder}
                onChange={handleChange}
                optionLabelProp="label"
            >
                {options}
            </Select>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "20px",
                }}
            >
                <Button type="primary" onClick={() => handleAddPatients()}>
                    Zatwierdź
                </Button>
            </div>
        </>
    );
}
export default PatientsSelect;
