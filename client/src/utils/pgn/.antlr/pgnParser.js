// Generated from /home/mario/Desktop/ChessLion/client/src/utils/pgn/pgn.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import pgnListener from './pgnListener.js';
import pgnVisitor from './pgnVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0014\u00ab\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u0002\u0017\n\u0002\f\u0002\u000e\u0002\u001a\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0007\u0003#\n\u0003\f\u0003\u000e\u0003&\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0006\u0004/\n\u0004\r\u0004\u000e\u00040\u0003\u0004\u0007\u0004",
    "4\n\u0004\f\u0004\u000e\u00047\u000b\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0005\u0006C\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007`\n\u0007\u0003\u0007\u0005\u0007c\n\u0007\u0003\u0007",
    "\u0003\u0007\u0007\u0007g\n\u0007\f\u0007\u000e\u0007j\u000b\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007o\n\u0007\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0007\bu\n\b\f\b\u000e\bx\u000b\b\u0003\b\u0003\b\u0003",
    "\b\u0006\b}\n\b\r\b\u000e\b~\u0003\b\u0003\b\u0003\b\u0005\b\u0084\n",
    "\b\u0003\b\u0003\b\u0003\b\u0006\b\u0089\n\b\r\b\u000e\b\u008a\u0003",
    "\b\u0007\b\u008e\n\b\f\b\u000e\b\u0091\u000b\b\u0003\b\u0003\b\u0003",
    "\b\u0005\b\u0096\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0007\t\u009c\n",
    "\t\f\t\u000e\t\u009f\u000b\t\u0003\t\u0003\t\u0007\t\u00a3\n\t\f\t\u000e",
    "\t\u00a6\u000b\t\u0003\t\u0005\t\u00a9\n\t\u0003\t\b5hv\u008f\u009d",
    "\u00a4\u0002\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\b\u0003\u0002",
    "\u0003\u0003\u0003\u0002\u0005\u0005\u0003\u0002\u0014\u0014\u0003\u0002",
    "\r\u000e\u0003\u0002\n\u000b\u0004\u0002\u000e\u000e\u0012\u0012\u0002",
    "\u00ba\u0002\u0012\u0003\u0002\u0002\u0002\u0004\u001e\u0003\u0002\u0002",
    "\u0002\u0006*\u0003\u0002\u0002\u0002\b<\u0003\u0002\u0002\u0002\n@",
    "\u0003\u0002\u0002\u0002\fF\u0003\u0002\u0002\u0002\u000ep\u0003\u0002",
    "\u0002\u0002\u0010\u009d\u0003\u0002\u0002\u0002\u0012\u0013\b\u0002",
    "\u0001\u0002\u0013\u0018\u0007\u0003\u0002\u0002\u0014\u0015\n\u0002",
    "\u0002\u0002\u0015\u0017\b\u0002\u0001\u0002\u0016\u0014\u0003\u0002",
    "\u0002\u0002\u0017\u001a\u0003\u0002\u0002\u0002\u0018\u0016\u0003\u0002",
    "\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u001b\u0003\u0002",
    "\u0002\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001b\u001c\u0007\u0003",
    "\u0002\u0002\u001c\u001d\b\u0002\u0001\u0002\u001d\u0003\u0003\u0002",
    "\u0002\u0002\u001e\u001f\b\u0003\u0001\u0002\u001f$\u0007\u0004\u0002",
    "\u0002 !\n\u0003\u0002\u0002!#\b\u0003\u0001\u0002\" \u0003\u0002\u0002",
    "\u0002#&\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002$%\u0003",
    "\u0002\u0002\u0002%\'\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002",
    "\'(\u0007\u0005\u0002\u0002()\b\u0003\u0001\u0002)\u0005\u0003\u0002",
    "\u0002\u0002*+\b\u0004\u0001\u0002+.\u0007\u0006\u0002\u0002,-\n\u0004",
    "\u0002\u0002-/\b\u0004\u0001\u0002.,\u0003\u0002\u0002\u0002/0\u0003",
    "\u0002\u0002\u00020.\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u0002",
    "15\u0003\u0002\u0002\u000224\u0007\u0014\u0002\u000232\u0003\u0002\u0002",
    "\u000247\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u000253\u0003\u0002",
    "\u0002\u000268\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u000289\u0005",
    "\u0002\u0002\u00029:\b\u0004\u0001\u0002:;\u0007\u0007\u0002\u0002;",
    "\u0007\u0003\u0002\u0002\u0002<=\u0007\r\u0002\u0002=>\u0007\u000e\u0002",
    "\u0002>?\b\u0005\u0001\u0002?\t\u0003\u0002\u0002\u0002@B\u0007\u000f",
    "\u0002\u0002AC\t\u0005\u0002\u0002BA\u0003\u0002\u0002\u0002BC\u0003",
    "\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DE\b\u0006\u0001\u0002E",
    "\u000b\u0003\u0002\u0002\u0002F_\b\u0007\u0001\u0002GH\u0005\b\u0005",
    "\u0002HI\b\u0007\u0001\u0002I`\u0003\u0002\u0002\u0002JK\u0007\r\u0002",
    "\u0002KL\u0007\b\u0002\u0002LM\u0005\b\u0005\u0002MN\b\u0007\u0001\u0002",
    "N`\u0003\u0002\u0002\u0002OP\u0005\n\u0006\u0002PQ\u0007\b\u0002\u0002",
    "QR\u0005\b\u0005\u0002RS\b\u0007\u0001\u0002S`\u0003\u0002\u0002\u0002",
    "TU\u0005\n\u0006\u0002UV\u0005\b\u0005\u0002VW\b\u0007\u0001\u0002W",
    "`\u0003\u0002\u0002\u0002XY\u0005\b\u0005\u0002YZ\u0007\t\u0002\u0002",
    "Z[\u0005\n\u0006\u0002[\\\b\u0007\u0001\u0002\\`\u0003\u0002\u0002\u0002",
    "]^\t\u0006\u0002\u0002^`\b\u0007\u0001\u0002_G\u0003\u0002\u0002\u0002",
    "_J\u0003\u0002\u0002\u0002_O\u0003\u0002\u0002\u0002_T\u0003\u0002\u0002",
    "\u0002_X\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002`b\u0003\u0002",
    "\u0002\u0002ac\u0007\u0010\u0002\u0002ba\u0003\u0002\u0002\u0002bc\u0003",
    "\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002dh\b\u0007\u0001\u0002e",
    "g\u0007\u0014\u0002\u0002fe\u0003\u0002\u0002\u0002gj\u0003\u0002\u0002",
    "\u0002hi\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002in\u0003\u0002",
    "\u0002\u0002jh\u0003\u0002\u0002\u0002kl\u0005\u0004\u0003\u0002lm\b",
    "\u0007\u0001\u0002mo\u0003\u0002\u0002\u0002nk\u0003\u0002\u0002\u0002",
    "no\u0003\u0002\u0002\u0002o\r\u0003\u0002\u0002\u0002pq\b\b\u0001\u0002",
    "qr\t\u0007\u0002\u0002rv\u0007\f\u0002\u0002su\u0007\u0014\u0002\u0002",
    "ts\u0003\u0002\u0002\u0002ux\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002",
    "\u0002vt\u0003\u0002\u0002\u0002w\u0095\u0003\u0002\u0002\u0002xv\u0003",
    "\u0002\u0002\u0002yz\u0005\f\u0007\u0002z\u0083\b\b\u0001\u0002{}\u0007",
    "\u0014\u0002\u0002|{\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002",
    "~|\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0080",
    "\u0003\u0002\u0002\u0002\u0080\u0081\u0005\f\u0007\u0002\u0081\u0082",
    "\b\b\u0001\u0002\u0082\u0084\u0003\u0002\u0002\u0002\u0083|\u0003\u0002",
    "\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002",
    "\u0002\u0002\u0085\u0086\b\b\u0001\u0002\u0086\u0096\u0003\u0002\u0002",
    "\u0002\u0087\u0089\u0007\f\u0002\u0002\u0088\u0087\u0003\u0002\u0002",
    "\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008f\u0003\u0002\u0002",
    "\u0002\u008c\u008e\u0007\u0014\u0002\u0002\u008d\u008c\u0003\u0002\u0002",
    "\u0002\u008e\u0091\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002",
    "\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u0090\u0092\u0003\u0002\u0002",
    "\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0092\u0093\u0005\f\u0007",
    "\u0002\u0093\u0094\b\b\u0001\u0002\u0094\u0096\u0003\u0002\u0002\u0002",
    "\u0095y\u0003\u0002\u0002\u0002\u0095\u0088\u0003\u0002\u0002\u0002",
    "\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0098\b\b\u0001\u0002\u0098",
    "\u000f\u0003\u0002\u0002\u0002\u0099\u009c\u0005\u0006\u0004\u0002\u009a",
    "\u009c\u0007\u0014\u0002\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009b",
    "\u009a\u0003\u0002\u0002\u0002\u009c\u009f\u0003\u0002\u0002\u0002\u009d",
    "\u009e\u0003\u0002\u0002\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009e",
    "\u00a4\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u00a0",
    "\u00a3\u0005\u000e\b\u0002\u00a1\u00a3\u0007\u0014\u0002\u0002\u00a2",
    "\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002\u00a3",
    "\u00a6\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a4",
    "\u00a2\u0003\u0002\u0002\u0002\u00a5\u00a8\u0003\u0002\u0002\u0002\u00a6",
    "\u00a4\u0003\u0002\u0002\u0002\u00a7\u00a9\u0007\u0011\u0002\u0002\u00a8",
    "\u00a7\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9",
    "\u0011\u0003\u0002\u0002\u0002\u0016\u0018$05B_bhnv~\u0083\u008a\u008f",
    "\u0095\u009b\u009d\u00a2\u00a4\u00a8"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class pgnParser extends antlr4.Parser {

    static grammarFileName = "pgn.g4";
    static literalNames = [ null, "'\"'", "'{'", "'}'", "'['", "']'", "'x'", 
                            "'='", "'O-O'", "'O-O-O'", "'.'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "FILE", "RANK", "PIECE", 
                             "GLYPH", "RESULT", "INT", "CHAR", "WS" ];
    static ruleNames = [ "string", "comment", "tag", "square", "piece", 
                         "halfMove", "fullMove", "game" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = pgnParser.ruleNames;
        this.literalNames = pgnParser.literalNames;
        this.symbolicNames = pgnParser.symbolicNames;

            this.tags = {};
            this.moves = [];

    }

    get atn() {
        return atn;
    }



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pgnParser.RULE_string);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	         let arr = []; 
	        this.state = 17;
	        this.match(pgnParser.T__0);
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pgnParser.T__1) | (1 << pgnParser.T__2) | (1 << pgnParser.T__3) | (1 << pgnParser.T__4) | (1 << pgnParser.T__5) | (1 << pgnParser.T__6) | (1 << pgnParser.T__7) | (1 << pgnParser.T__8) | (1 << pgnParser.T__9) | (1 << pgnParser.FILE) | (1 << pgnParser.RANK) | (1 << pgnParser.PIECE) | (1 << pgnParser.GLYPH) | (1 << pgnParser.RESULT) | (1 << pgnParser.INT) | (1 << pgnParser.CHAR) | (1 << pgnParser.WS))) !== 0)) {
	            this.state = 18;
	            localctx.c = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(_la<=0 || _la===pgnParser.T__0) {
	                localctx.c = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	             arr.append((localctx.c===null ? null : localctx.c.text)); 
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
	        this.match(pgnParser.T__0);
	         localctx.txt =  arr.join('') 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, pgnParser.RULE_comment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	         let arr = []; 
	        this.state = 29;
	        this.match(pgnParser.T__1);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pgnParser.T__0) | (1 << pgnParser.T__1) | (1 << pgnParser.T__3) | (1 << pgnParser.T__4) | (1 << pgnParser.T__5) | (1 << pgnParser.T__6) | (1 << pgnParser.T__7) | (1 << pgnParser.T__8) | (1 << pgnParser.T__9) | (1 << pgnParser.FILE) | (1 << pgnParser.RANK) | (1 << pgnParser.PIECE) | (1 << pgnParser.GLYPH) | (1 << pgnParser.RESULT) | (1 << pgnParser.INT) | (1 << pgnParser.CHAR) | (1 << pgnParser.WS))) !== 0)) {
	            this.state = 30;
	            localctx.c = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(_la<=0 || _la===pgnParser.T__2) {
	                localctx.c = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	             arr.push((localctx.c===null ? null : localctx.c.text)); 
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 37;
	        this.match(pgnParser.T__2);
	         localctx.txt =  arr.join('') 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tag() {
	    let localctx = new TagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, pgnParser.RULE_tag);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);

	                let arr = [];
	                let key = '';
	            
	        this.state = 41;
	        this.match(pgnParser.T__3);
	        this.state = 44; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 42;
	        		localctx.a = this._input.LT(1);
	        		_la = this._input.LA(1);
	        		if(_la<=0 || _la===pgnParser.WS) {
	        		    localctx.a = this._errHandler.recoverInline(this);
	        		}
	        		else {
	        			this._errHandler.reportMatch(this);
	        		    this.consume();
	        		}
	        		 arr.push((localctx.a===null ? null : localctx.a.text)); 
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 46; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 51;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 48;
	                this.match(pgnParser.WS); 
	            }
	            this.state = 53;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 54;
	        localctx.s = this.string();

	                key = arr.join('');
	                this.tags[key] = (localctx.s===null ? null : this._input.getText(new antlr4.Interval(localctx.s.start,localctx.s.stop))).substring(1, (localctx.s===null ? null : this._input.getText(new antlr4.Interval(localctx.s.start,localctx.s.stop))).length-1);
	            
	        this.state = 56;
	        this.match(pgnParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	square() {
	    let localctx = new SquareContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, pgnParser.RULE_square);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        localctx.f = this.match(pgnParser.FILE);
	        this.state = 59;
	        localctx.r = this.match(pgnParser.RANK);
	         localctx.txt = (localctx.f===null ? null : localctx.f.text) + (localctx.r===null ? null : localctx.r.text) 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	piece() {
	    let localctx = new PieceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, pgnParser.RULE_piece);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        localctx.p = this.match(pgnParser.PIECE);
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 63;
	            localctx.x = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===pgnParser.FILE || _la===pgnParser.RANK)) {
	                localctx.x = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }

	        }

	                localctx.txt =  (localctx.p===null ? null : localctx.p.text)
	                if (localctx.x != undefined)
	                    localctx.txt += (localctx.x===null ? null : localctx.x.text);
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	halfMove() {
	    let localctx = new HalfMoveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, pgnParser.RULE_halfMove);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);

	                localctx.props =  {
	                    'move': undefined,
	                    'glyph': undefined,
	                    'comment': undefined,
	                }
	            
	        this.state = 93;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 69;
	            localctx.s = this.square();
	             localctx.props['move'] = localctx.s.txt; 
	            break;

	        case 2:
	            this.state = 72;
	            localctx.f = this.match(pgnParser.FILE);
	            this.state = 73;
	            this.match(pgnParser.T__5);
	            this.state = 74;
	            localctx.s = this.square();
	             localctx.props['move'] = (localctx.f===null ? null : localctx.f.text) + 'x' + localctx.s.txt; 
	            break;

	        case 3:
	            this.state = 77;
	            localctx.p = this.piece();
	            this.state = 78;
	            this.match(pgnParser.T__5);
	            this.state = 79;
	            localctx.s = this.square();
	             localctx.props['move'] = localctx.p.txt + 'x' + localctx.s.txt; 
	            break;

	        case 4:
	            this.state = 82;
	            localctx.p = this.piece();
	            this.state = 83;
	            localctx.s = this.square();
	             localctx.props['move'] = localctx.p.txt + localctx.s.txt; 
	            break;

	        case 5:
	            this.state = 86;
	            localctx.s = this.square();
	            this.state = 87;
	            this.match(pgnParser.T__6);
	            this.state = 88;
	            localctx.p = this.piece();
	             localctx.props['move'] = localctx.s.txt + '=' + localctx.p.txt; 
	            break;

	        case 6:
	            this.state = 91;
	            localctx.x = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===pgnParser.T__7 || _la===pgnParser.T__8)) {
	                localctx.x = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	             localctx.props['move'] = (localctx.x===null ? null : localctx.x.text); 
	            break;

	        }
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pgnParser.GLYPH) {
	            this.state = 95;
	            localctx.g = this.match(pgnParser.GLYPH);
	        }

	         localctx.props['glyph'] = (localctx.g == undefined)? undefined : (localctx.g===null ? null : localctx.g.text) 
	        this.state = 102;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 99;
	                this.match(pgnParser.WS); 
	            }
	            this.state = 104;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pgnParser.T__1) {
	            this.state = 105;
	            localctx.c = this.comment();
	             localctx.props['comment'] = localctx.c.txt; 
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fullMove() {
	    let localctx = new FullMoveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, pgnParser.RULE_fullMove);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	         let move = []; 
	        this.state = 111;
	        _la = this._input.LA(1);
	        if(!(_la===pgnParser.RANK || _la===pgnParser.INT)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 112;
	        this.match(pgnParser.T__9);
	        this.state = 116;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 113;
	                this.match(pgnParser.WS); 
	            }
	            this.state = 118;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	        this.state = 147;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pgnParser.T__7:
	        case pgnParser.T__8:
	        case pgnParser.FILE:
	        case pgnParser.PIECE:
	            this.state = 119;
	            localctx.h1 = this.halfMove();
	             move.push(localctx.h1.props); 
	            this.state = 129;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	            if(la_===1) {
	                this.state = 122; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 121;
	                    this.match(pgnParser.WS);
	                    this.state = 124; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===pgnParser.WS);
	                this.state = 126;
	                localctx.h2 = this.halfMove();
	                 move.push(localctx.h2.props); 

	            }

	                        if (move.length < 2)
	                            move.push({
	                                'move': undefined,
	                                'glyph': undefined,
	                                'comment': undefined,
	                            });
	                    
	            break;
	        case pgnParser.T__9:
	            this.state = 134; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 133;
	                this.match(pgnParser.T__9);
	                this.state = 136; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===pgnParser.T__9);
	            this.state = 141;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 138;
	                    this.match(pgnParser.WS); 
	                }
	                this.state = 143;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	            }

	            this.state = 144;
	            localctx.h = this.halfMove();

	                        move.append({
	                            'move': undefined,
	                            'glyph': undefined,
	                            'comment': undefined,
	                        });
	                        move.push(localctx.h.props);
	                    
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	         this.moves.push(move); 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	game() {
	    let localctx = new GameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, pgnParser.RULE_game);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 153;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case pgnParser.T__3:
	                    this.state = 151;
	                    this.tag();
	                    break;
	                case pgnParser.WS:
	                    this.state = 152;
	                    this.match(pgnParser.WS);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 157;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	        this.state = 162;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 160;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case pgnParser.RANK:
	                case pgnParser.INT:
	                    this.state = 158;
	                    this.fullMove();
	                    break;
	                case pgnParser.WS:
	                    this.state = 159;
	                    this.match(pgnParser.WS);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 164;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        }

	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pgnParser.RESULT) {
	            this.state = 165;
	            this.match(pgnParser.RESULT);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

pgnParser.EOF = antlr4.Token.EOF;
pgnParser.T__0 = 1;
pgnParser.T__1 = 2;
pgnParser.T__2 = 3;
pgnParser.T__3 = 4;
pgnParser.T__4 = 5;
pgnParser.T__5 = 6;
pgnParser.T__6 = 7;
pgnParser.T__7 = 8;
pgnParser.T__8 = 9;
pgnParser.T__9 = 10;
pgnParser.FILE = 11;
pgnParser.RANK = 12;
pgnParser.PIECE = 13;
pgnParser.GLYPH = 14;
pgnParser.RESULT = 15;
pgnParser.INT = 16;
pgnParser.CHAR = 17;
pgnParser.WS = 18;

pgnParser.RULE_string = 0;
pgnParser.RULE_comment = 1;
pgnParser.RULE_tag = 2;
pgnParser.RULE_square = 3;
pgnParser.RULE_piece = 4;
pgnParser.RULE_halfMove = 5;
pgnParser.RULE_fullMove = 6;
pgnParser.RULE_game = 7;

class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgnParser.RULE_string;
        this.txt = null
        this.c = null; // Token
    }


	enterRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.exitString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pgnVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgnParser.RULE_comment;
        this.txt = null
        this.c = null; // Token
    }


	enterRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.exitComment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pgnVisitor ) {
	        return visitor.visitComment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgnParser.RULE_tag;
        this.a = null; // Token
        this.s = null; // StringContext
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgnParser.WS);
	    } else {
	        return this.getToken(pgnParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.enterTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.exitTag(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pgnVisitor ) {
	        return visitor.visitTag(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SquareContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgnParser.RULE_square;
        this.txt = null
        this.f = null; // Token
        this.r = null; // Token
    }

	FILE() {
	    return this.getToken(pgnParser.FILE, 0);
	};

	RANK() {
	    return this.getToken(pgnParser.RANK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.enterSquare(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.exitSquare(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pgnVisitor ) {
	        return visitor.visitSquare(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PieceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgnParser.RULE_piece;
        this.txt = null
        this.p = null; // Token
        this.x = null; // Token
    }

	PIECE() {
	    return this.getToken(pgnParser.PIECE, 0);
	};

	FILE() {
	    return this.getToken(pgnParser.FILE, 0);
	};

	RANK() {
	    return this.getToken(pgnParser.RANK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.enterPiece(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.exitPiece(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pgnVisitor ) {
	        return visitor.visitPiece(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HalfMoveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgnParser.RULE_halfMove;
        this.props = null
        this.s = null; // SquareContext
        this.f = null; // Token
        this.p = null; // PieceContext
        this.x = null; // Token
        this.g = null; // Token
        this.c = null; // CommentContext
    }

	square() {
	    return this.getTypedRuleContext(SquareContext,0);
	};

	FILE() {
	    return this.getToken(pgnParser.FILE, 0);
	};

	piece() {
	    return this.getTypedRuleContext(PieceContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgnParser.WS);
	    } else {
	        return this.getToken(pgnParser.WS, i);
	    }
	};


	GLYPH() {
	    return this.getToken(pgnParser.GLYPH, 0);
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.enterHalfMove(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.exitHalfMove(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pgnVisitor ) {
	        return visitor.visitHalfMove(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FullMoveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgnParser.RULE_fullMove;
        this.h1 = null; // HalfMoveContext
        this.h2 = null; // HalfMoveContext
        this.h = null; // HalfMoveContext
    }

	INT() {
	    return this.getToken(pgnParser.INT, 0);
	};

	RANK() {
	    return this.getToken(pgnParser.RANK, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgnParser.WS);
	    } else {
	        return this.getToken(pgnParser.WS, i);
	    }
	};


	halfMove = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HalfMoveContext);
	    } else {
	        return this.getTypedRuleContext(HalfMoveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.enterFullMove(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.exitFullMove(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pgnVisitor ) {
	        return visitor.visitFullMove(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgnParser.RULE_game;
    }

	tag = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TagContext);
	    } else {
	        return this.getTypedRuleContext(TagContext,i);
	    }
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgnParser.WS);
	    } else {
	        return this.getToken(pgnParser.WS, i);
	    }
	};


	fullMove = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FullMoveContext);
	    } else {
	        return this.getTypedRuleContext(FullMoveContext,i);
	    }
	};

	RESULT() {
	    return this.getToken(pgnParser.RESULT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.enterGame(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgnListener ) {
	        listener.exitGame(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pgnVisitor ) {
	        return visitor.visitGame(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




pgnParser.StringContext = StringContext; 
pgnParser.CommentContext = CommentContext; 
pgnParser.TagContext = TagContext; 
pgnParser.SquareContext = SquareContext; 
pgnParser.PieceContext = PieceContext; 
pgnParser.HalfMoveContext = HalfMoveContext; 
pgnParser.FullMoveContext = FullMoveContext; 
pgnParser.GameContext = GameContext; 
