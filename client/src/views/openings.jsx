import React from 'react';
import { Route } from 'react-router-dom';
import Base from './base';
import * as KingsGambit from './_openings/kingsGambit';
import './openings.scss';


function Sidebar(props) {
    return (
        <nav id="openings-sidebar" className="nav flex-column">
            <div>
                <a className="nav-link" href="/openings">Index</a>
                <hr />
                <KingsGambit.Sidebar />
            </div>
        </nav>
    );
}


function OpeningBase(props) {
    return (
        <Base activeLinkKey="openings">
            <div className="container-fluid d-flex mx-1 my-4">
                <Sidebar />
                {props.children}
            </div>
        </Base>
    );
}


export default function Openings(props) {

    return (
        <OpeningBase>
            Hello
        </OpeningBase>
    );
}


// Routes
const routesJsx = [];
const routesObj = {
    // King's Gambit
    '/openings/kings_gambit': <KingsGambit.Intro />,
    'openings/kings_gambit/accepted': <KingsGambit.Accepted />,
}
for (const route in routesObj) {
    routesJsx.push(
        <Route key={route} path={route} element={
            <OpeningBase>
                { routesObj[route] }
            </OpeningBase>
        } />
    );
}
export const routes = routesJsx;
