import React from 'react';
import '../openings.scss';


export function Sidebar(props) {
    return (
        <div>
            <a className="nav-link" href="/openings/kings_gambit">King's Gambit</a>
            <ul>
                <li>
                    <a className='nav-link' href="/openings/kings_gambit/accepted">
                        Accepted Line
                    </a>
                </li>
            </ul>
        </div>
    );
}


export function Intro(props) {
    return (
        <div className="context">
            <h1>King's Gambit</h1>
            <p className="stdText">
                The King's Gambit is a risky gambit for white which allows rapid development
                and central control. It starts with the moves <span className="chessText">1. e4 e5 2. f4</span>,
                immediately giving up the f-pawn in order to take in the center. White will be looking forward to
                castling on the king's side and developing as quickly as possible. Black has four ways of responding:
                <ul>
                    <li>Accepting the gambit and returning the pawn</li>
                    <li>Accepting the gambit and holding on to the pawn</li>
                    <li>Declining the gambit</li>
                    <li>Offering a countergambit</li>
                </ul>
            </p>
        </div>
    );
}


export function Accepted(props) {
    return (
        <div></div>
    );
}
