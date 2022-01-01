// Generated from /home/mario/Desktop/ChessLion/client/src/utils/pgn/pgn.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by pgnParser.

export default class pgnVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by pgnParser#string.
	visitString(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by pgnParser#comment.
	visitComment(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by pgnParser#tag.
	visitTag(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by pgnParser#square.
	visitSquare(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by pgnParser#piece.
	visitPiece(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by pgnParser#halfMove.
	visitHalfMove(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by pgnParser#fullMove.
	visitFullMove(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by pgnParser#game.
	visitGame(ctx) {
	  return this.visitChildren(ctx);
	}



}