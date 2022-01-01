import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Openings, { routes as openingsRoutes } from "./views/openings";
import Analysis from "./views/analysis";
import './app.scss';


const App: React.FC = () => {
    return (
        <React.StrictMode>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/openings" element={<Openings/>} />
                    {openingsRoutes}
                    <Route path="/analysis" element={<Analysis/>} />
                </Routes>
            </BrowserRouter>

        </React.StrictMode>
    );
}

export default App;
