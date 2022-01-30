import React from 'react';
import LionChessboard from '../components/board/lionChessboard';
import { Link } from 'react-router-dom';
import '../openings.scss';
import './board.scss';


export const Sidebar: React.FC = () => {
    return (
        <div>
            <Link className="nav-link" to="/openings/kings_gambit">
                King's Gambit
            </Link>
            <div className="mx-4">
                <Link className="nav-link" to="/openings/kings_gambit/kieseritzky">
                    Kieseritzky Variation
                </Link>
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
                <ul className='stdText'>
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
                The Kieseritzky, popularized by Lionel Kieseritzky in the 1840s, is the
                most common variation that is seen nowadays. It starts with the following
                moves:
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
            <p>
                After the move <span>2.. exf4</span> white plays <span>3. Nf3</span> to
                prevent <span>3.. Qh4+</span>. Black wants to hold on to his f-pawn by
                playing <span>3.. g5</span>, with plans of playing <span>h6</span> and
                <span>Bg7</span>, which is looking very good.
                The move <span>4. h4!</span> attacks black's g-pawn, immediately forcing
                black to play <span>4.. g4</span> (the move <span>4.. h6?!</span> does not
                defend the pawn: <span>4.. h6?! 5. hxg5 hxg5?? 6. Rxh8</span> is lost for black).
                <br />
                Here, black has to chose between three main moves: <span>5.. Nf6</span>,
                <span> 5.. Bg7</span> and <span>5.. d6</span>.
            </p>
            <br />
            <h2>5.. Nf6</h2>
            <p>
                The variation continues as follows:
            </p>
            <div className='boardDemo'>
                <LionChessboard
                size={350}
                showHistory={true}
                showHistoryButtons={true}
                historyLocked={true}
                fen='rnbqkbnr/pppp1p1p/8/8/4PppP/5N2/PPPP2P1/RNBQKB1R w KQkq - 0 5'
                pgn='5. Ne5 Nf6 6. d4 d6 7. Nd3 Nxe4 8. Bxf4 Qe7 9. Be2 Nc6 10. c3 Bf5 11. d5 Nb8'
                startingMove={5}
                />
            </div>
        </div>
    );
}
