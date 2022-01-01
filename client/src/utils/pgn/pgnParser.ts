import antlr4 from 'antlr4';
import pgnLexer from './.antlr/pgnLexer';
import pgnParser from './.antlr/pgnParser';


export interface Move {
    move?: string;
    glyph?: string;
    comment?: string;
}

export interface PgnObject {
    tags: { [key: string]: string };
    moves: Array<[Move, Move]>;
}

export function parsePgn(input: string): PgnObject {
    const chars = new antlr4.InputStream(input);
    const lexer = new pgnLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new pgnParser(tokens);
    parser.game();

    return {
        tags: parser.tags,
        moves: parser.moves,
    }
}


export default class Pgn implements PgnObject {
    tags: { [key: string]: string; } = {};
    moves: [Move, Move][] = [];

    constructor(pgn?: string | PgnObject) {
        if (pgn !== undefined) {
            if (typeof pgn === 'string') {
                this.parse(pgn);
            } else {
                this.tags = pgn.tags;
                this.moves = pgn.moves;
            }
        }
    }

    parse = (input: string): void => {
        const tmp = parsePgn(input);
        this.tags = tmp.tags;
        this.moves = tmp.moves;
    }

    addMove = (input: string | Move): void => {
        if (typeof input === 'string') {
            let tmp = parsePgn(input);
            this.addMove(tmp.moves[0][0]);
        } else {
            if (this.moves.length === 0) {
                this.moves.push([input, {}]);
                return;
            }
            let lastMove = this.moves[this.moves.length-1][1];
            if (lastMove.move === undefined && lastMove.glyph === undefined && lastMove.comment === undefined)
                this.moves[this.moves.length-1][1] = input;
            else
                this.moves.push([input, {}]);
        }
    }

    toString = (): string => {
        const tags: Array<string> = [];
        for (let tag in this.tags) {
            tags.push('[' + tag + ' "' + this.tags[tag] + '"');
        }

        const moves: Array<string> = [];
        for (let i=0; i<this.moves.length; i++) {
            let tmp = '' + (i + 1);
            for (let move of this.moves[i]) {
                if (move.move !== undefined)
                    tmp += ' ' + move.move;
                if (move.glyph !== undefined)
                    tmp += move.glyph;
                if (move.comment !== undefined)
                    tmp += ' {' + move.comment + '}';
            }
            moves.push(tmp);
        }

        return tags.join('\n') + '\n' + moves.join('\n');
    }

}
