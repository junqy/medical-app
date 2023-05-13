export const projectsColumns = [
    {
        title: "Nazwa",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
        title: "Założyciel",
        dataIndex: "founder",
        key: "founder",
        sorter: (a, b) => a.founder.localeCompare(b.founder),
    },
    {
        title: "Data Startu",
        dataIndex: "startDate",
        key: "startDate",
        sorter: (a, b) => Date.parse(a.startDate) - Date.parse(b.startDate),
    },
    {
        title: "Data Zakończenia",
        dataIndex: "endDate",
        key: "endDate",
        sorter: (a, b) => Date.parse(a.endDate) - Date.parse(b.endDate),
    },
    {
        title: "Typ",
        dataIndex: "type",
        key: "type",
        sorter: (a, b) => a.type.localeCompare(b.type),
    },
    {
        title: "Zakończony",
        dataIndex: "isFinished",
        key: "isFinished",
        sorter: (a, b) => a.isFinished - b.isFinished,
        render: (record) => (record === true ? "Tak" : "Nie"),
    },
    {
        title: "Liczba Pacjentów",
        dataIndex: "patients",
        key: "patients",
        sorter: (a, b) => a.patients - b.patients,
        render: (record) => record?.length,
    },
]