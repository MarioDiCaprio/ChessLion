import React from 'react';
import Base from './base';
import LionChessboard from './components/board/lionChessboard';
import './analysis.scss';


const Analysis: React.FC = () => {
    return (
        <Base activeLinkKey="analysis">
            <div id="analysis-main" className="container-fluid">
                <LionChessboard
                size={600}
                showHistory={true}
                showHistoryButtons={true}
                />
            </div>
        </Base>
    );
}

export default Analysis;
