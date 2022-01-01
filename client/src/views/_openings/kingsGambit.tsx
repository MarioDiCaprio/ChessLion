import React from 'react';
import LionChessboard from '../components/board/lionChessboard';
import '../openings.scss';
import './board.scss';


export const Sidebar: React.FC = () => {
    return (
        <div>
            <a className="nav-link" href="/openings/kings_gambit">King's Gambit</a>
            <div className="mx-4">
                <a className='nav-link' href="/openings/kings_gambit/kieseritzky">
                    Kieseritzky Variation
                </a>
            </div>
        </div>
    );
}


export const Intro: React.FC = () => {
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
                These main variations will be covered in this tutorial.
            </p>
        </div>
    );
}


export const Kieseritzky: React.FC = () => {
    return (
        <div className="context">
            <h1>King's Gambit: Kieseritzky Variation</h1>
            <p className="stdText">
                The Kieseritzky is the most common variation that is seen nowadays.
                It starts with the following moves:
            </p>
            <div className='boardDemo'>
                <LionChessboard
                size={350}
                showHistory={true}
                showHistoryButtons={true}
                historyLocked={true}
                pgn='1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5'
                />
            </div>
        </div>
    );
}
