import { Drawer, Grid } from "antd";
import AppMenu from "../app_menu/AppMenu";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import "./styles.css"

const { useBreakpoint } = Grid;

function Navigation() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const breakpoints = useBreakpoint();

    return (
        <>
            {breakpoints.xs ? (
                <div className="icon-container">
                    <MenuOutlined className="hamburger-icon" onClick={() => setOpenDrawer(true)}/>
                </div>
            ) : (
                <AppMenu />
            )}
            <Drawer
                open={openDrawer}
                closable={false}
                onClose={() => setOpenDrawer(false)}
            >
                <AppMenu isDrawer={true} />
            </Drawer>
        </>
    );
}

export default Navigation;
