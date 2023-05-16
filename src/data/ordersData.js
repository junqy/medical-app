export const ordersColumns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
        sorter: (a, b) => a.id - b.id,
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
        title: "ID Projektu",
        dataIndex: "projectId",
        key: "projectId",
        sorter: (a, b) => a.projectId - b.projectId,
    },
    {
        title: "Nazwa Projektu",
        dataIndex: "projectName",
        key: "projectName",
        sorter: (a, b) => a.projectName.localeCompare(b.projectName),
    },
    {
        title: "ID Pacjenta",
        dataIndex: "patientId",
        key: "patientId",
        sorter: (a, b) => a.patientId.localeCompare(b.patientId),
    },
    {
        title: "Pacjent",
        dataIndex: "patientName",
        key: "patientName",
        sorter: (a, b) => a.patientName.localeCompare(b.patientName),
    }
]