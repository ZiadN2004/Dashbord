import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.css"
import { ContextProvider } from "./context/contextApi";




ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>, document.getElementById("root"))