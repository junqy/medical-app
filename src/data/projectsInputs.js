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
        name: "founder",
        label: "Założyciel",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić założyciela.",
            },
        ],
    },
    {
        type: "text",
        name: "type",
        label: "Typ",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić typ.",
            },
        ],
    }
];
