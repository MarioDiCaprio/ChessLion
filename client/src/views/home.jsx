import React from "react";
import Base from './base';
import LionChessboard from './components/lionChessboard';
import './home.scss';


export default function Home(props) {
    return (
        <Base activeLinkKey="home">
            <div id="home-main" className="container-fluid">
                <LionChessboard
                legalMoves={true}
                />
            </div>
        </Base>
    );
}
