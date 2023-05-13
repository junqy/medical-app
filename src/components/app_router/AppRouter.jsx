import React from "react";
import { Layout, Grid } from "antd";
import { Route, Routes } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./styles.css";
import Summary from "../../pages/summary/Summary";
import Patients from "../../pages/patients/Patients";
import Projects from "../../pages/projects/Projects";
import Research from "../../pages/research/Research";

const { useBreakpoint } = Grid;
const { Header, Content, Footer } = Layout;

function AppRouter(props) {
    const breakpoints = useBreakpoint();

    return (
        <Layout className="layout">
            <Header className={breakpoints.xs && "header-small"}>
                <Navigation />
            </Header>
            <Content className={breakpoints.xs ? "content-small" : "content"}>
                <Routes>
                    <Route path="/" element={<Summary />} />
                    <Route
                        path="/patients"
                        element={
                            <Patients
                                patients={props.patients}
                                setPatients={props.setPatients}
                                promptError={props.promptError}
                            />
                        }
                    />
                    <Route
                        path="/projects"
                        element={
                            <Projects
                                projects={props.projects}
                                setProjects={props.setProjects}
                                promptError={props.promptError}
                                patients={props.patients}
                            />
                        }
                    />
                    <Route path="/research" element={<Research />} />
                </Routes>
            </Content>
            <Footer style={{ textAlign: "center" }}>Test</Footer>
        </Layout>
    );
}

export default AppRouter;
