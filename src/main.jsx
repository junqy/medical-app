import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ConfigProvider, theme as antdTheme } from "antd";
import theme from "./theme/theme.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const { darkAlgorithm } = antdTheme;
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ConfigProvider theme={{...theme, algorithm: darkAlgorithm}}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ConfigProvider>
    </React.StrictMode>
);
