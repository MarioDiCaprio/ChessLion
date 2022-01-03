import Pgn from '../../../utils/pgn/pgnParser';
import './history.scss';


/**
 * This interface contains all the props of the component 'MoveHistory'.
 * It may have a starting history ('history'), the key for the currently
 * selected move ('selectedMoveKey'), which is made of the turn and the color
 * of the player (e.g. '2w' means 'move 2, white's move') and a function that
 * is triggered each time the move at a certain index has been clicked
 * ('onMoveClicked').
 */
export interface MoveHistoryProps {
    /** The array containing all moves (e.g. ['e4', 'e5', { move: 'Nf3', glyph: '?!' }, 'Nf6']) */
    pgn?: Pgn;
    /** The starting round of the PGN */
    startingMove?: number;
    /** An optional key of the selected move (e.g. '2w') */
    selectedMoveKey?: string;
    /**
     * An optional function that is triggered when the move at the selected index
     * in the history is clicked (e.g. index => console.log(history[index]))
    */
    onMoveClicked?: (round: number, side: 0 | 1) => void;
}

/**
 * This component displays the move history for a game of chess. It is displayed
 * in form of a table. For an explanation of the props, refer to the interface
 * 'MoveHistoryProps'.
 * @param {MoveHistoryProps} props The props for this component
 * @returns The JSX element that displays the given data
 */
const MoveHistory: React.FC<MoveHistoryProps> = ({
    pgn = new Pgn(),
    startingMove = 1,
    selectedMoveKey = undefined,
    onMoveClicked = undefined,
}: MoveHistoryProps) => {

    // css class based on glyphs
    const glyphColor: { [key: string]: string } = {
        '?': 'mistake',
        '??': 'blunder',
        '?!': 'inaccuracy',
        '!': 'good',
        '!!': 'excellent',
    }

    // complete history
    const history: Array<JSX.Element> = [];
    // one turn (temp variable)
    let round: Array<JSX.Element> = [];
    let roundNum: number = 1;

    // populate history with corresponding JSX
    for (let i = 0; i < pgn.moves.length; i++) {
        for (let j=0; j<2; j++) {
            let move = pgn.moves[i][j];
            let css: string = 'regular';
            let text: string;
            let key: string = (j === 0) ? roundNum + 'w' : roundNum + 'b';

            // break if move is undefined (only the case when white moved last, since black's move is 'undefined')
            if (move.move === undefined) {
                round.push(<td key={roundNum + 'b'}></td>);
                break;
            }
            // select color based on glyph
            if (move.glyph !== undefined) {
                text = move.move + move.glyph;
                if (move.glyph in glyphColor)
                    css += ' ' + glyphColor[move.glyph];
            } else {
                text = move.move;
            }

            if (selectedMoveKey === key) {
                css += ' active';
            }

            // triggered when this move gets clicked
            const moveClicked = () => {
                if (onMoveClicked !== undefined) {
                    // @ts-ignore
                    onMoveClicked(i, j);
                }
            }

            // add JSX to temp variable
            round.push(
                <td key={key} className={css} onClick={moveClicked}>
                    {text}
                </td>
            );
        }

        // add temp variable to table, rinse and repeat
        history.push(
            <tr key={roundNum}>
                <th key={roundNum + 'w'} scope="row">
                    <div>{startingMove - 1 + roundNum++}</div>
                </th>
                {round}
            </tr>
        );
        round = [];
    }

    return (
        <table id="history-table" className="table table-borderless table-bordered" style={{ maxHeight: 'inherit' }}>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">White</th>
                    <th scope="col">Black</th>
                </tr>
            </thead>
            <tbody>
                {history}
            </tbody>
        </table>
    );
}


export default MoveHistory;
