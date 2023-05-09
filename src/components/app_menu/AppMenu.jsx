import { Menu } from "antd";
import {
    ExperimentOutlined,
    UserOutlined,
    LineChartOutlined,
    BulbOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const items = [
    {
        label: <Link to="/">Podsumowanie</Link>,
        key: "/",
        icon: <LineChartOutlined />,
    },
    {
        label: <Link to="/patients">Pacjenci</Link>,
        key: "/patients",
        icon: <UserOutlined />,
    },
    {
        label: <Link to="/projects">Projekty</Link>,
        key: "/projects",
        icon: <BulbOutlined />,
    },
    {
        label: <Link to="/research">Badania</Link>,
        key: "/research",
        icon: <ExperimentOutlined />,
    },
];
function AppMenu({ isDrawer = false }) {
    const location = useLocation();
    const { pathname } = location;

    return (
        <Menu
            className="menu"
            theme="dark"
            items={items}
            mode={isDrawer ? "inline" : "horizontal"}
            selectedKeys={pathname}
        />
    );
}

export default AppMenu;
