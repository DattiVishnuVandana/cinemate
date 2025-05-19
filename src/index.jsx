import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App.jsx";

import {ScrollToTop} from "./components/ScrollToTop.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <ScrollToTop/>
            <App/>
        </Router>
        
    </React.StrictMode>
);
