import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";

function PatientsTable({ patients, setPatients }) {
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };
    const getColumnSearchProps = (dataIndex, title) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            close,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Szukaj po "${title}"`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Szukaj
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Resetuj
                    </Button>
                    <Button
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        Zamknij
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1890ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: "Imię",
            dataIndex: "name",
            key: "name",
            ...getColumnSearchProps("name", "Imię"),
        },
        {
            title: "Nazwisko",
            dataIndex: "surname",
            key: "surname",
            ...getColumnSearchProps("surname", "Nazwisko"),
        },
        {
            title: "Data Urodzenia",
            dataIndex: "birthDate",
            key: "birthDate",
            ...getColumnSearchProps("birthDate", "Data Urodzenia"),
        },
        {
            title: "Kraj",
            dataIndex: "country",
            key: "country",
            ...getColumnSearchProps("country", "Kraj"),
        },
        {
            title: "Miasto",
            dataIndex: "city",
            key: "city",
            ...getColumnSearchProps("city", "Miasto"),
        },
        {
            title: "Ulica",
            dataIndex: "street",
            key: "street",
            ...getColumnSearchProps("street", "Ulica"),
        },
        {
            title: "Budynek",
            dataIndex: "building",
            key: "building",
            width: "5%",
            ...getColumnSearchProps("building", "Budynek"),
        },
        {
            title: "Mieszkanie",
            dataIndex: "apartment",
            key: "apartment",
            width: "5%",
            ...getColumnSearchProps("apartment", "Mieszaknie"),
        },
        {
            title: "Płeć",
            dataIndex: "gender",
            key: "gender",
            width: "5%",
            ...getColumnSearchProps("gender", "Płeć"),
        },
        {
            title: "Numer Telefonu",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
            ...getColumnSearchProps("phoneNumber", "Numer Telefonu"),
        },
        {
            title: "Stan Cywilny",
            dataIndex: "martialStatus",
            key: "martialStatus",
            ...getColumnSearchProps("martialStatus", "Stan Cywilny"),
        },
        {
            title: "Zawód",
            dataIndex: "profession",
            key: "profession",
            ...getColumnSearchProps("profession", "Zawód"),
        },
    ];
    return (
        <Table
            columns={columns}
            dataSource={patients}
            pagination={{ position: ["bottomCenter"], defaultPageSize: 10 }}
            scroll={{
                x: 1300,
              }}
        />
    );
}

export default PatientsTable;
