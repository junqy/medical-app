import React from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./styles.css";
import Summary from "../../pages/summary/Summary";
import Patients from "../../pages/patients/Patients";
import Projects from "../../pages/projects/Projects";
import Research from "../../pages/research/Research";
const { Header, Content, Footer } = Layout;

function AppRouter(props) {
    return (
        <Layout className="layout">
            <Header>
                <Navigation />
            </Header>
            <Content className="content">
                <Routes>
                    <Route path="/" element={<Summary />} />
                    <Route
                        path="/patients"
                        element={
                            <Patients
                                patients={props.patients}
                                setPatients={props.setPatients}
                            />
                        }
                    />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/research" element={<Research />} />
                </Routes>
            </Content>
            <Footer>Test</Footer>
        </Layout>
    );
}

export default AppRouter;
