import React from "react";
import { Layout, Menu } from "antd";
import Navigation from "../navigation/Navigation";
const { Header, Content, Footer } = Layout;

function AppRouter() {
    return (
        <Layout className="layout">
            <Header>
                <Navigation />
            </Header>
            <Content className="content">
                test
            </Content>
            <Footer>
                Test
            </Footer>
        </Layout>
    );
}

export default AppRouter;
