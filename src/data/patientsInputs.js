export const inputs = [
    {
        type: "text",
        name: "name",
        label: "Imię",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić imię.",
            },
        ],
    },
    {
        type: "text",
        name: "surname",
        label: "Nazwisko",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić nazwisko.",
            },
        ],
    },
    {
        type: "date",
        name: "birthDate",
        label: "Data urodzenia",
        rules: [
            {
                type: "object",
                required: true,
                message: "Proszę wprowadzić datę urodzenia.",
            },
        ],
    },
    {
        type: "text",
        name: "country",
        label: "Kraj",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić kraj.",
            },
        ],
    },
    {
        type: "text",
        name: "city",
        label: "Miasto",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić miasto.",
            },
        ],
    },
    {
        type: "text",
        name: "street",
        label: "Ulica",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić ulicę.",
            },
        ],
    },
    {
        type: "text",
        name: "building",
        label: "Budynek",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić budynek.",
            },
        ],
    },
    {
        type: "text",
        name: "apartment",
        label: "Mieszkanie",
    },
    {
        type: "select",
        name: "gender",
        label: "Płeć",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić płeć.",
            },
        ],
        options: [
            { value: "K", label: "Kobieta" },
            { value: "M", label: "Mężczyzna" },
        ],
    },
    {
        type: "number",
        name: "phoneNumber",
        label: "Numer Telefonu",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić numer telefonu.",
            },
        ],
    },
    {
        type: "text",
        name: "martialStatus",
        label: "Stan Cywilny",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić stan cywilny.",
            },
        ],
    },
    {
        type: "text",
        name: "profession",
        label: "Zawód",
        rules: [
            {
                required: true,
                message: "Proszę wprowadzić zawód.",
            },
        ],
    },
];
