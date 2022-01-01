import React from "react";
import Base from './base';
import LionChessboard from './components/board/lionChessboard';
import './home.scss';


const Home : React.FC<{}> = () => {
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


export default Home;
