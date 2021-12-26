import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Chessboard } from 'react-chessboard';
import Chess from 'chess.js';


export function pieceStyle(style) {
    let pieces =    [
                    'wP', 'wB', 'wN', 'wR', 'wQ', 'wK',
                    'bP', 'bB', 'bN', 'bR', 'bQ', 'bK'
                    ];
    let obj = {};
    for (let piece of pieces) {
        let dir = process.env.PUBLIC_URL + '/chesspieces/' + style + '/' + piece + '.png';
        obj[piece] = args => {
            let size = args.squareWidth;
            return <img src={dir} style={{width: size, height: size}} alt={piece} />;
        };
    }
    return obj;
}


function LionChessboard(props) {
    const [game, setGame] = useState( Chess(props.fen) );

    // legal moves only
    function onPieceDrop(square1, square2) {
        let move = game.move({ from: square1, to: square2, promotion: 'q' });
        if (move !== null) {
            setGame({...game})
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            <Chessboard
            onPieceDrop={ props.legalMoves? onPieceDrop : undefined }
            position={ game.fen() }
            customPieces={ pieceStyle(props.pieceStyle) }
            customBoardStyle={{borderRadius: '7px'}}
            />
        </div>
    );
}

LionChessboard.propTypes = {
    legalMoves: PropTypes.bool,
    fen: PropTypes.string,
    pieceStyle: PropTypes.string,
}

LionChessboard.defaultProps = {
    legalMoves: false,
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    pieceStyle: 'fresca',
}

export default LionChessboard;
