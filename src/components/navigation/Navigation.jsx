import { Drawer, Menu } from "antd";
import AppMenu from "../app_menu/AppMenu";
import { useState } from "react";

function Navigation() {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <AppMenu />
            <Drawer
                open={openDrawer}
                closable={false}
                onClose={() => setOpenDrawer(false)}
                style={{ background: "red" }}
            >
                <AppMenu isDrawer={true} />
            </Drawer>
        </>
    );
}

export default Navigation;
