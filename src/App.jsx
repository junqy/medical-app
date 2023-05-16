import "./App.css";
import AppRouter from "./components/app_router/AppRouter";
import { message } from "antd";
import { getPatients } from "./api/services/patientsService";
import { useEffect } from "react";
import errorHandler from "./api/errorHandler";
import React, { useState } from "react";
import { getProjects, updateProject } from "./api/services/projectsService";
import { getResearch } from "./api/services/researchService";
import { getOrders } from "./api/services/ordersService";
import { getOrdersResults } from "./api/services/ordersResultsService";

function App() {
    const [messageApi, contextHolder] = message.useMessage();
    const [patients, setPatients] = useState([]);
    const [projects, setProjects] = useState([]);
    const [research, setResearch] = useState([]);
    const [orders, setOrders] = useState([]);
    const [ordersResults, setOrdersResults] = useState([]);

    const promptError = (message) => {
        messageApi.open({
            type: "error",
            content: `STATUS BŁĘDU: ${message}`,
        });
    };

    const promptMessage = (message) => {
        messageApi.open({
            type: "info",
            content: message,
        });
    };

    useEffect(() => {
        getAllPatients();
        getAllProjects();
        getAllResearch();
        getAllOrders();
        getAllOrdersResults();
    }, []);

    const getAllPatients = async () => {
        await getPatients()
            .then((response) => setPatients(response.data))
            .catch((err) => errorHandler(err, promptError));
    };

    const getAllProjects = async () => {
        await getProjects()
            .then((response) => setProjects(response.data))
            .catch((err) => errorHandler(err, promptError));
    };

    const getAllResearch = async () => {
        await getResearch()
            .then((response) => setResearch(response.data))
            .catch((err) => errorHandler(err, promptError));
    };

    const getAllOrders = async () => {
        await getOrders()
            .then((response) => setOrders(response.data))
            .catch((err) => errorHandler(err, promptError));
    };

    const getAllOrdersResults = async () => {
        await getOrdersResults()
            .then((response) => setOrdersResults(response.data))
            .catch((err) => errorHandler(err, promptError));
    };

    const updatePatientsInProjects = async (patientId) => {
        const projectsWithPatient = projects.filter((project) =>
            project.patients.includes(String(patientId))
        );
        await Promise.all(
            projectsWithPatient.map(async (item) => {
                const filteredPatients = item.patients;
                const index = filteredPatients.indexOf(String(patientId));
                filteredPatients.splice(index, 1);
                await updateProject(item.id, {
                    ...item,
                    patients: filteredPatients,
                })
                    .then((response) => {
                        setProjects(
                            projects.map((project) =>
                                project.id === item.id
                                    ? { ...response.data }
                                    : project
                            )
                        );
                    })
                    .catch((err) => errorHandler(err, promptError));
            })
        );
    };

    return (
        <div className="App">
            {contextHolder}
            <AppRouter
                patients={patients}
                setPatients={setPatients}
                projects={projects}
                setProjects={setProjects}
                research={research}
                setResearch={setResearch}
                orders={orders}
                setOrders={setOrders}
                ordersResults={ordersResults}
                setOrdersResults={setOrdersResults}
                promptError={promptError}
                promptMessage={promptMessage}
                getAllOrders={getAllOrders}
                getAllOrdersResults={getAllOrdersResults}
                updatePatientsInProjects={updatePatientsInProjects}
            />
        </div>
    );
}

export default App;
