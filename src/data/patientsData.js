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

export const patientsColumns = [
    {
        title: "Imię",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
        title: "Nazwisko",
        dataIndex: "surname",
        key: "surname",
        sorter: (a, b) => a.surname.localeCompare(b.surname),
    },
    {
        title: "Data Urodzenia",
        dataIndex: "birthDate",
        key: "birthDate",
        sorter: (a, b) => Date.parse(a.birthDate) - Date.parse(b.birthDate),
    },
    {
        title: "Kraj",
        dataIndex: "country",
        key: "country",
        sorter: (a, b) => a.country.localeCompare(b.country),
    },
    {
        title: "Miasto",
        dataIndex: "city",
        key: "city",
        sorter: (a, b) => a.city.localeCompare(b.city),
    },
    {
        title: "Ulica",
        dataIndex: "street",
        key: "street",
        sorter: (a, b) => a.street.localeCompare(b.street),
    },
    {
        title: "Budynek",
        dataIndex: "building",
        key: "building",
        width: "5%",
        sorter: (a, b) => a.building.localeCompare(b.building),
    },
    {
        title: "Mieszkanie",
        dataIndex: "apartment",
        key: "apartment",
        width: "5%",
        sorter: (a, b) => b.apartment.localeCompare(a.apartment),
    },
    {
        title: "Płeć",
        dataIndex: "gender",
        key: "gender",
        width: "5%",
        sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
        title: "Numer Telefonu",
        dataIndex: "phoneNumber",
        key: "phoneNumber",
        sorter: (a, b) => a.phoneNumber - b.phoneNumber,
    },
    {
        title: "Stan Cywilny",
        dataIndex: "martialStatus",
        key: "martialStatus",
        sorter: (a, b) => a.martialStatus.localeCompare(b.martialStatus),
    },
    {
        title: "Zawód",
        dataIndex: "profession",
        key: "profession",
        sorter: (a, b) => a.profession.localeCompare(b.profession),
    },
]
