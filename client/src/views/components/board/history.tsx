import Pgn from '../../../utils/pgn/pgnParser';

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
    selectedMoveKey = undefined,
    onMoveClicked = undefined,
}: MoveHistoryProps) => {

    // move colors based on glyphs
    const glyphColor: { [key: string]: string } = {
        '?': 'rgb(235, 207, 0)',
        '??': 'rgb(255, 79, 56)',
        '!?': 'rgb(45, 187, 252)',
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
            let color: string = 'rgb(100, 100, 100)';
            let border: string = 'transparent';
            let text: string;
            let key: string = (j === 0) ? roundNum + 'w' : roundNum + 'b';

            // break if move is undefined (only the case when white's move was the last one in the game)
            if (move.move === undefined) {
                break;
            }
            // select color based on glyph
            if (move.glyph !== undefined && move.glyph in glyphColor) {
                text = move + move.glyph;
                color = glyphColor[move.glyph];
            } else {
                text = move.move;
            }

            // select additional border if this move is selected
            if (selectedMoveKey === key) {
                border = color;
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
                <td key={key}>
                    <button className="btn" style={{ color: color, borderColor: border }} onClick={moveClicked}>
                        {text}
                    </button>
                </td>
            );
        }

        // add temp variable to table, rinse and repeat
        history.push(
            <tr key={roundNum}>
                <th key={roundNum + 'w'} scope="row">{roundNum++}</th>
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
