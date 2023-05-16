export const ordersResultsColumns = [
    {
        title: "ID Zlecenia",
        dataIndex: "orderId",
        key: "orderId",
        sorter: (a, b) => a.orderId - b.orderId,
    },
    {
        title: "ID Badania",
        dataIndex: "researchId",
        key: "researchId",
        sorter: (a, b) =>  a.researchId - b.researchId,
    },
    {
        title: "Badanie",
        dataIndex: "researchName",
        key: "researchName",
        sorter: (a, b) => a.researchName.localeCompare(b.researchName),
    },
    {
        title: "Wynik",
        dataIndex: "result",
        key: "result",
        sorter: (a, b) => a.result.localeCompare(b.result),
    },
]