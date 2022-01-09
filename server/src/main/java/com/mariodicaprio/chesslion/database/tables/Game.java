package com.mariodicaprio.chesslion.database.tables;


import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * This entity represents a game of chess. A game is played by two
 * players, black and white, has some kind of opening and, obviously,
 * the moves. Additionally, each game has a unique ID. Therefore, this
 * class comes with the following properties:
 * <ul>
 *     <li>A unique ID</li>
 *     <li>A PGN (portable game notation) of the game</li>
 *     <li>A list of FEN positions for each given move</li>
 *     <li>A date</li>
 *     <li>The white player</li>
 *     <li>The black player</li>
 *     <li>The opening that was played during the game</li>
 * </ul>
 * @see Player
 * @see Opening
 */
@Entity
public class Game {

    @Id
    @Column(name = "gameId", nullable = false)
    private long gameId;

    /**
     * Retrieves the game's ID. This ID is unique.
     * @return The ID
     */
    public long getGameId() {
        return gameId;
    }

    /**
     * Sets the game's ID. Note that it should be unique.
     * By default, it is auto-generated.
     * @param gameId The ID
     */
    public void setGameId(long gameId) {
        this.gameId = gameId;
    }

    ////////////////////////////////////////////////////////

    @Lob
    @Column(name = "pgn")
    private String pgn;

    /**
     * Retrieves the PGN representation of the game.
     * @return The PGN
     */
    public String getPgn() {
        return pgn;
    }

    /**
     * Sets the PGN representation of the game.
     * @param pgn The PGN
     */
    public void setPgn(String pgn) {
        this.pgn = pgn;
    }

    ////////////////////////////////////////////////////////

    @ElementCollection
    @Column(name = "fenPositions")
    private List<String> fenPositions;

    /**
     * Retrieves a list of FEN positions of the game.
     * The index of each move corresponds to the board
     * position of that specific move.
     * @return A list of FEN positions
     */
    public List<String> getFenPositions() {
        return fenPositions;
    }

    /**
     * Sets a list of FEN positions of the game.
     * The index of each move corresponds to the board
     * position of that specific move.
     * @param fenPositions A list of FEN positions
     */
    public void setFenPositions(List<String> fenPositions) {
        this.fenPositions = fenPositions;
    }

    ////////////////////////////////////////////////////////

    @Temporal(value = TemporalType.DATE)
    @Column
    private Date date;

    /**
     * Retrieves the date this game was played on.
     * @return The date
     */
    public Date getDate() {
        return date;
    }

    /**
     * Sets the date this game was played on.
     * @param date The date
     */
    public void setDate(Date date) {
        this.date = date;
    }

    ////////////////////////////////////////////////////////

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "openingId")
    private Opening opening;

    /**
     * Retrieves the opening of this game.
     * @return The opening
     */
    public Opening getOpening() {
        return opening;
    }

    /**
     * Sets the opening of this game.
     * @param opening The opening
     */
    public void setOpening(Opening opening) {
        this.opening = opening;
    }

    ////////////////////////////////////////////////////////

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "whiteId")
    private Player white;

    /**
     * Retrieves the white player.
     * @return The white player
     */
    public Player getWhite() {
        return white;
    }

    /**
     * Sets the white player.
     * @param white The white player
     */
    public void setWhite(Player white) {
        this.white = white;
    }

    ////////////////////////////////////////////////////////

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "blackId")
    private Player black;

    /**
     * Retrieves the black player.
     * @return The black player
     */
    public Player getBlack() {
        return black;
    }

    /**
     * Sets the black player.
     * @param black The black player
     */
    public void setBlack(Player black) {
        this.black = black;
    }

}
