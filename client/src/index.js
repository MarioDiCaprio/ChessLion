import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from './views/home';
import Openings, { routes as openingsRoutes } from './views/openings';

ReactDOM.render(
    <React.StrictMode>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/openings" element={<Openings/>}/>
                {openingsRoutes}
            </Routes>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);
