export const inputs = [
    {
        type: "text",
        name: "name",
        label: "Nazwa",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić nazwę.",
            },
        ],
    },
    {
        type: "text",
        name: "doctor",
        label: "Lekarz",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić lekarza.",
            },
        ],
    },
    {
        type: "number",
        name: "room",
        label: "Sala",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić salę.",
            },
        ],
    }
];

export const researchColumns = [
    {
        title: "Nazwa",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
        title: "Lekarz",
        dataIndex: "doctor",
        key: "doctor",
        sorter: (a, b) => a.doctor.localeCompare(b.doctor),
    },
    {
        title: "Sala",
        dataIndex: "room",
        key: "room",
        sorter: (a, b) => a.room - b.room,
    },
]