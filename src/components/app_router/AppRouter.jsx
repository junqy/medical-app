import React from "react";
import { Layout, Grid } from "antd";
import { Route, Routes } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./styles.css";
import Summary from "../../pages/summary/Summary";
import Patients from "../../pages/patients/Patients";
import Projects from "../../pages/projects/Projects";
import Research from "../../pages/research/Research";
import Orders from "../../pages/orders/Orders";
import FooterContent from "../footer/FooterContent";

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
                    <Route
                        path="/"
                        element={
                            <Summary
                                patients={props.patients}
                                projects={props.projects}
                                research={props.research}
                                orders={props.orders}
                                ordersResults={props.ordersResults}
                            />
                        }
                    />
                    <Route
                        path="/patients"
                        element={
                            <Patients
                                patients={props.patients}
                                setPatients={props.setPatients}
                                promptError={props.promptError}
                                getAllOrders={props.getAllOrders}
                                updatePatientsInProjects={
                                    props.updatePatientsInProjects
                                }
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
                                getAllOrders={props.getAllOrders}
                            />
                        }
                    />
                    <Route
                        path="/research"
                        element={
                            <Research
                                research={props.research}
                                setResearch={props.setResearch}
                                promptError={props.promptError}
                                orders={props.orders}
                                ordersResults={props.ordersResults}
                                setOrdersResults={props.setOrdersResults}
                                getAllOrdersResults={props.getAllOrdersResults}
                            />
                        }
                    />
                    <Route
                        path="/orders"
                        element={
                            <Orders
                                orders={props.orders}
                                patients={props.patients}
                                projects={props.projects}
                                research={props.research}
                                setOrders={props.setOrders}
                                promptError={props.promptError}
                                promptMessage={props.promptMessage}
                                getAllOrdersResults={props.getAllOrdersResults}
                            />
                        }
                    />
                </Routes>
            </Content>
            <Footer style={{ textAlign: "center" }}><FooterContent /></Footer>
        </Layout>
    );
}

export default AppRouter;
