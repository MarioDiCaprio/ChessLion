import React from 'react';
import { Route } from 'react-router-dom';
import Base from './base';
import * as KingsGambit from './_openings/kingsGambit';
import './openings.scss';


const Sidebar: React.FC = () => {
    return (
        <nav id="openings-sidebar" className="nav flex-column">
            <div className="nav-item">
                <a className="nav-link" href="/openings">Index</a>
            </div>
            <hr />
            <KingsGambit.Sidebar />
        </nav>
    );
}


const OpeningBase: React.FC = props => {
    return (
        <Base activeLinkKey="openings">
            <div className="container-fluid d-flex mx-1 my-4">
                <Sidebar />
                {props.children}
            </div>
        </Base>
    );
}


const Openings: React.FC = () => {

    return (
        <OpeningBase>
            <div className="context">
                <h1>Openings</h1>
                <p className="stdText">
                    Learning about openings is an indication that you are getting serious about
                    chess and that you want to improve your game. Though strategy, tactics, endgames
                    etc. are at least as important as the opening, knowing theory is essential as you
                    start improving in chess.

                    As White, you are allowed to begin the game, usually with the moves
                    <span className="chessText"> 1. e4</span>, <span className="chessText"> 1. d4 </span>
                    or <span className="chessText"> 1. c4</span>. Hence, you need to learn the most common
                    replies for Black. For example, the move <span className="chessText">1. e4 </span>
                    can be met with <span className="chessText">1.. e5</span> or
                    <span className="chessText"> 1.. c5</span>.

                    This guide focuses on teaching in-depth opening knowledge to players of all experience
                    levels.
                </p>
            </div>
        </OpeningBase>
    );
}

export default Openings;


///////////////////////////////////////////////////////////
/// Routes
///////////////////////////////////////////////////////////

const routesJsx = [];
const routesObj: { [key: string]: JSX.Element } = {
    // King's Gambit
    '/openings/kings_gambit': <KingsGambit.Intro />,
    'openings/kings_gambit/kieseritzky': <KingsGambit.Kieseritzky />
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
