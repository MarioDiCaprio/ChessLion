import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import Chess, { Square } from 'chess.js';
import { getPieceStyle, PieceStyle } from './style';
import MoveHistory from './history';
import Pgn, { Move, parsePgn, PgnObject } from '../../../utils/pgn/pgnParser';
import './lionChessboard.scss';
import LinearTable from '../../../utils/data/linearTable';


/**
 * This class is the chessboard's state. All actions on this state
 * are equivalent to an action on the board. This class is intended to
 * be used as a stateful value for the 'LionChessboard' component.
 */
class ChessboardState {
    /** A table containing a SAN move and a FEN position, for each move in the history */
    table: LinearTable<{ move: Move, fen: string }> = new LinearTable(2);
    /** The index of the currently selected move in the history */
    selectedMove: [number, 0 | 1] = [-1, 1];
    /** The starting FEN position */
    fen!: string | undefined;
    /** The chess.js object to verify the legality of a move */
    // @ts-ignore
    game!: Chess;
    props!: {
        historyLocked: boolean
    };

    /**
     * Constructs the stateful value for the LionChessboard.
     * @param pgn An optional PGN game to use as move history
     * @param fen The starting FEN position on the board
     */
    constructor(pgn?: PgnObject | string, fen?: string, props = {
        historyLocked: true
    }) {
        this.props = props;
        this.fen = fen;
        // @ts-ignore
        this.game = Chess(fen);
        if (typeof pgn === 'string')
            pgn = parsePgn(pgn);
        if (pgn !== undefined) {
            for (let move of pgn.moves) {
                for (let m of move) {
                    if (m.move !== undefined) {
                        let tmp = this.game.move(m.move);
                        if (tmp !== null) {
                            this.table.push({ move: m, fen: this.game.fen() });
                        }
                    }
                }
            }
        }
    }

    /**
     * Generates a PGN that is equivalent to that of the history.
     * @returns This state's PGN equivalent
     */
    getPgn = (): PgnObject => {
        return {
            tags: {},
            // @ts-ignore
            moves: this.table.matrix.map(row => row.map(x => {
                if (x !== null)
                    return x.move;
                else
                    return { move: undefined, glyph: undefined, comment: undefined };
            }))
        };
    }

    /**
     * Retrieves the FEN of the currently selected move. If the selection
     * is null, 'undefined' is returned instead.
     * @returns The currently selected FEN
     */
    selectedFen = (): string | undefined => {
        const [round, side] = this.selectedMove;
        const cell =  this.table.get(round, side);
        return (cell === null)? this.fen : cell.fen;
    }

    /**
     * Computes the key for the currently selected move. This is
     * used with the 'MoveHistory' component, so as to specify the
     * active move button.
     * @returns The key for the currently selected move
     */
    getSelectedMoveKey = (): string => {
        const [round, side] = this.selectedMove;
        return (round + 1) + (side===0? 'w' : 'b');
    }

    /**
     * Selects a move in the history. If the selection is
     * out of bounds or is 'null' or 'undefined', nothing
     * is selected.
     * @param round The round (a positive integer)
     * @param side (white=0, black=1)
     */
    selectMove = (round: number, side: 0 | 1): void => {
        if (round > -1 && round < this.table.totalItems()) {
            const selection = this.table.get(round, side);
            if (selection !== null && selection !== undefined) {
                this.selectedMove = [round, side];
                this.game.load( this.selectedFen() );
            }
        }
    }

    /**
     * Selects the next move in the history. If the selection is
     * out of bounds or 'null' or 'undefined', nothing is selected.
     */
    selectNextMove = (): void => {
        const [round, side] = this.selectedMove;
        if (side === 0)
            this.selectMove(round, 1);
        else
            this.selectMove(round + 1, 0);
    }

    /**
     * Selects the previous move in the history. If the selection is
     * out of bounds or 'null' or 'undefined', nothing is selected.
     */
    selectPrevMove = (): void => {
        const [round, side] = this.selectedMove;
        if (side === 1)
            this.selectMove(round, 0);
        else
            this.selectMove(round - 1, 1);
    }

    /**
     * Selects the last non-null move in the history.
     */
    selectLastMove = (): void => {
        // @ts-ignore
        this.selectedMove = this.table.lastIndex();
    }

    /**
     * Appends a UCI move to the history. If the move is illegal, nothing
     * is done. If 'props.historyLocked' is true, nothing is done.
     * This function is used with the 'onPieceDrop' event of the chessboard.
     * @param square1 The starting square of the piece
     * @param square2 The target square of the piece
     * @param promotion An optional 'promotion' (for pawns)
     * @returns Whether the move was successful
     */
    addMoveUci = (square1: string, square2: string, promotion: string = 'q'): boolean => {
        if (this.props.historyLocked)
            return false;
        let move = this.game.move({ from: square1, to: square2, promotion: promotion });
        if (move !== null) {
            // @ts-ignore
            this.table.push({ move: { move: move.san, glyph: undefined, comment: undefined }, fen: this.game.fen() });
            this.selectLastMove();
            return true;
        }
        return false;
    }
}

/**
 * This interface contains all the props for the 'LionChessboard' component.
 */
export interface LionChessboardProps {
    /** The FEN position of the board */
    fen?: string;
    /** Whether only legal moves should be allowed */
    legalMoves?: boolean;
    /** The style of the pieces */
    pieceStyle?: PieceStyle;
    /** Whether to show the move history */
    showHistory?: boolean;
    /** Whether to show the 'next move' and 'previous move' buttons for the move history */
    showHistoryButtons?: boolean;
    /** Whether moves can be played (useful for a fixed history) */
    historyLocked?: boolean;
    /** An optional PGN game */
    pgn?: string;
    /** The round the PGN starts with */
    startingMove?: number;
    /** The size of the board in pixels */
    size?: number;
}

/**
 * This component displays a chessboard. For info about the props, refer to the
 * interface 'LionCHessboardProps'.
 * @param {LionChessboardProps} props The props for the chessboard
 * @returns The JSX that display the chessboard
 */
const LionChessboard: React.FC<LionChessboardProps> = ({
        legalMoves = true,
        fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        pieceStyle = 'fresca',
        showHistory = false,
        showHistoryButtons = false,
        historyLocked = false,
        pgn = undefined,
        startingMove = 1,
        size = 500,
    }: LionChessboardProps) => {

    const [state, setState] = useState<ChessboardState>(new ChessboardState(pgn, fen, {
        historyLocked: historyLocked
    }));

    function onPieceDrop(square1: Square, square2: Square): boolean {
        const tmp = state.addMoveUci(square1, square2, 'q');
        if (tmp) {
            setState({...state});
            return true;
        }
        return false;
    }

    // executes the given function and re-renders the board
    function doAndUpdate(f: () => any): any {
        f();
        setState({...state});
    }

    return (
        <div className="hstack gap-3">
            <div className="vstack gap-2" style={{width: size, height: size}}>
                <Chessboard
                onPieceDrop={ legalMoves? onPieceDrop : undefined }
                position={ state.selectedFen() }
                customPieces={ getPieceStyle(pieceStyle) }
                customBoardStyle={{borderRadius: '7px'}}
                boardWidth={size}
                animationDuration={200}
                />
                {
                    showHistoryButtons &&
                    <div id="history-buttons-div" className="btn-group d-flex justify-content-between" role="group">
                        <button className="btn" onClick={() => doAndUpdate( () => state.selectPrevMove() )}>
                            <i className="bi bi-caret-left-fill"></i>
                        </button>
                        <button className="btn" onClick={() => doAndUpdate( () => state.selectNextMove() )}>
                            <i className="bi bi-caret-right-fill"></i>
                        </button>
                    </div>
                }
            </div>
            {
                showHistory &&
                <div style={{maxHeight: size, overflowY: 'scroll'}}>
                    <MoveHistory
                    pgn={ new Pgn( state.getPgn() ) }
                    startingMove={ startingMove }
                    selectedMoveKey={state.getSelectedMoveKey()}
                    onMoveClicked={(round, side) => doAndUpdate( () => state.selectMove(round, side) )}
                    />
                </div>
            }
        </div>
    );
}

export default LionChessboard;
