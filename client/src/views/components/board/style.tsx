/**
 * This type designates a function that takes in some optional arguments and
 * returns a corresponding JSX element. The function belongs to a certain piece
 * on the chessboard. The returned element displays that piece.
 */
export type PieceStyleFunction = (args?: any) => JSX.Element;

/**
 * This type represents all the available piece styles.
 */
export type PieceStyle =
                    'alpha' | 'california' | 'cardinal' | 'cburnett' | 'chess7' | 'chessnut' |
                    'classic' | 'companion' | 'dubrovny' | 'fantasy' | 'fresca' | 'gioco' |
                    'governor' | 'horsey' | 'icpieces' | 'kosal' | 'leipzig' | 'letter' | 'libra' |
                    'maestro' | 'merida' | 'pirouetti' | 'pixel' | 'reillycraig' | 'riohacha' |
                    'shapes' | 'spatial' | 'staunty' | 'tatiana';

/**
 * This type represents all possible pieces on the Chessboard.
 */
export type Piece =
                'wP' | 'wN' | 'wB' | 'wR' | 'wQ' | 'wK' |
                'bP' | 'bN' | 'bB' | 'bR' | 'bQ' | 'bK';

/**
 * This interface defines the return type of the function 'getPieceStyle'.
 * A piece (as a string) is mapped to a function ('pieceStyleFunction') that
 * renders that piece. A whole set of pieces can be mapped with this.
 */
export type PieceStyleReturnType = {
    [piece in Piece]: PieceStyleFunction;
}

/**
 * This function returns an object that represents the style of
 * the chess pieces. The object's keys represent a certain piece
 * (e.g. 'wN' = 'white Knight', 'bK' = 'black King') and the value
 * is a function that takes some optional arguments as parameters
 * and returns the JSX element that displays the given piece.
 * @param {PieceStyle} style The piece style
 * @returns An object that represents the pieces' style
 */
export function getPieceStyle(style: PieceStyle): PieceStyleReturnType {
    const f: PieceStyleFunction = () => <span></span>;
    let pieces: Array<Piece> = [
        'wP', 'wN', 'wB', 'wR', 'wQ', 'wK',
        'bP', 'bN', 'bB', 'bR', 'bQ', 'bK'
    ];
    let obj: PieceStyleReturnType = {
        'wP': f, 'wN': f, 'wB': f, 'wR': f, 'wQ': f, 'wK': f,
        'bP': f, 'bN': f, 'bB': f, 'bR': f, 'bQ': f, 'bK': f
    };
    for (let piece of pieces) {
        let dir = process.env.PUBLIC_URL + '/chesspieces/' + style + '/' + piece + '.png';
        obj[piece] = (args: any) => {
            let size = args.squareWidth;
            return <img src={dir} style={{ width: size, height: size }} alt={piece} />;
        };
    }
    return obj;
}
