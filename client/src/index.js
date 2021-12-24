import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from './views/home';

ReactDOM.render(
    <React.StrictMode>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);
