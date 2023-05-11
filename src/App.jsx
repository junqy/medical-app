import "./App.css";
import AppRouter from "./components/app_router/AppRouter";
import { ConfigProvider, message } from "antd";
import { getPatients } from "./api/services/patientsService";
import { useEffect } from "react";
import errorHandler from "./api/errorHandler";
import React, { useState } from "react";
import { getProjects } from "./api/services/projectsService";

function App() {
    const [messageApi, contextHolder] = message.useMessage();
    const [patients, setPatients] = useState([]);
    const [projects, setProjects] = useState([])

    const promptError = (message) => {
        messageApi.open({
            type: "error",
            content: `STATUS BŁĘDU: ${message}`,
        });
    };

    useEffect(() => {
        getAllPatients();
        getAllProjects();
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

    return (
        <div className="App">
            {contextHolder}
            <AppRouter
                patients={patients}
                setPatients={setPatients}
                projects={projects}
                setProjects={setProjects}
                promptError={promptError}
            />
        </div>
    );
}

export default App;
