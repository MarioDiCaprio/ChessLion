// Generated from /home/mario/Desktop/ChessLion/client/src/utils/pgn/pgn.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0014d\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0006\u000fI\n\u000f",
    "\r\u000f\u000e\u000fJ\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010Z\n\u0010\u0003\u0011",
    "\u0006\u0011]\n\u0011\r\u0011\u000e\u0011^\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0002\u0002\u0014\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\u0003\u0002\t\u0003\u0002cj\u0003\u00023:\u0006\u0002DDMMPPST\u0006",
    "\u0002##%%--AA\u0003\u00022;\u0004\u0002C\\c|\u0005\u0002\u000b\f\u000f",
    "\u000f\"\"\u0002g\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0003\'\u0003\u0002\u0002\u0002\u0005)\u0003\u0002\u0002",
    "\u0002\u0007+\u0003\u0002\u0002\u0002\t-\u0003\u0002\u0002\u0002\u000b",
    "/\u0003\u0002\u0002\u0002\r1\u0003\u0002\u0002\u0002\u000f3\u0003\u0002",
    "\u0002\u0002\u00115\u0003\u0002\u0002\u0002\u00139\u0003\u0002\u0002",
    "\u0002\u0015?\u0003\u0002\u0002\u0002\u0017A\u0003\u0002\u0002\u0002",
    "\u0019C\u0003\u0002\u0002\u0002\u001bE\u0003\u0002\u0002\u0002\u001d",
    "H\u0003\u0002\u0002\u0002\u001fY\u0003\u0002\u0002\u0002!\\\u0003\u0002",
    "\u0002\u0002#`\u0003\u0002\u0002\u0002%b\u0003\u0002\u0002\u0002\'(",
    "\u0007$\u0002\u0002(\u0004\u0003\u0002\u0002\u0002)*\u0007}\u0002\u0002",
    "*\u0006\u0003\u0002\u0002\u0002+,\u0007\u007f\u0002\u0002,\b\u0003\u0002",
    "\u0002\u0002-.\u0007]\u0002\u0002.\n\u0003\u0002\u0002\u0002/0\u0007",
    "_\u0002\u00020\f\u0003\u0002\u0002\u000212\u0007z\u0002\u00022\u000e",
    "\u0003\u0002\u0002\u000234\u0007?\u0002\u00024\u0010\u0003\u0002\u0002",
    "\u000256\u0007Q\u0002\u000267\u0007/\u0002\u000278\u0007Q\u0002\u0002",
    "8\u0012\u0003\u0002\u0002\u00029:\u0007Q\u0002\u0002:;\u0007/\u0002",
    "\u0002;<\u0007Q\u0002\u0002<=\u0007/\u0002\u0002=>\u0007Q\u0002\u0002",
    ">\u0014\u0003\u0002\u0002\u0002?@\u00070\u0002\u0002@\u0016\u0003\u0002",
    "\u0002\u0002AB\t\u0002\u0002\u0002B\u0018\u0003\u0002\u0002\u0002CD",
    "\t\u0003\u0002\u0002D\u001a\u0003\u0002\u0002\u0002EF\t\u0004\u0002",
    "\u0002F\u001c\u0003\u0002\u0002\u0002GI\t\u0005\u0002\u0002HG\u0003",
    "\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002",
    "JK\u0003\u0002\u0002\u0002K\u001e\u0003\u0002\u0002\u0002LM\u00073\u0002",
    "\u0002MN\u0007/\u0002\u0002NZ\u00072\u0002\u0002OP\u00072\u0002\u0002",
    "PQ\u0007/\u0002\u0002QZ\u00073\u0002\u0002RS\u00073\u0002\u0002ST\u0007",
    "1\u0002\u0002TU\u00074\u0002\u0002UV\u0007/\u0002\u0002VW\u00073\u0002",
    "\u0002WX\u00071\u0002\u0002XZ\u00074\u0002\u0002YL\u0003\u0002\u0002",
    "\u0002YO\u0003\u0002\u0002\u0002YR\u0003\u0002\u0002\u0002Z \u0003\u0002",
    "\u0002\u0002[]\t\u0006\u0002\u0002\\[\u0003\u0002\u0002\u0002]^\u0003",
    "\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002",
    "_\"\u0003\u0002\u0002\u0002`a\t\u0007\u0002\u0002a$\u0003\u0002\u0002",
    "\u0002bc\t\b\u0002\u0002c&\u0003\u0002\u0002\u0002\u0006\u0002JY^\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class pgnLexer extends antlr4.Lexer {

    static grammarFileName = "pgn.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'\"'", "'{'", "'}'", "'['", "']'", "'x'", 
                         "'='", "'O-O'", "'O-O-O'", "'.'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, "FILE", "RANK", "PIECE", "GLYPH", 
                          "RESULT", "INT", "CHAR", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "FILE", "RANK", "PIECE", "GLYPH", 
                      "RESULT", "INT", "CHAR", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());

            this.tags = {};
            this.moves = [];

    }

    get atn() {
        return atn;
    }
}

pgnLexer.EOF = antlr4.Token.EOF;
pgnLexer.T__0 = 1;
pgnLexer.T__1 = 2;
pgnLexer.T__2 = 3;
pgnLexer.T__3 = 4;
pgnLexer.T__4 = 5;
pgnLexer.T__5 = 6;
pgnLexer.T__6 = 7;
pgnLexer.T__7 = 8;
pgnLexer.T__8 = 9;
pgnLexer.T__9 = 10;
pgnLexer.FILE = 11;
pgnLexer.RANK = 12;
pgnLexer.PIECE = 13;
pgnLexer.GLYPH = 14;
pgnLexer.RESULT = 15;
pgnLexer.INT = 16;
pgnLexer.CHAR = 17;
pgnLexer.WS = 18;



