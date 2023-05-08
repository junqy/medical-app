import { Drawer, Menu } from "antd";
import React from "react";
import {
    ExperimentOutlined,
    UserOutlined,
    LineChartOutlined,
    BulbOutlined,
} from "@ant-design/icons";

const items = [
    {
        label: "Podsumowanie",
        key: "summary",
        icon: <LineChartOutlined />,
    },
    {
        label: "Pacjenci",
        key: "patients",
        icon: <UserOutlined />,
    },
    {
        label: "Projekty",
        key: "projects",
        icon: <BulbOutlined />,
    },
    {
        label: "Badania",
        key: "research",
        icon: <ExperimentOutlined />,
    },
];
function AppMenu({ isDrawer = false }) {
    return (
        <Menu className="menu" items={items} theme="dark" mode={isDrawer ? "inline" : "horizontal"}/>
    );
}

export default AppMenu;
