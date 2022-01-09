package com.mariodicaprio.chesslion.database.tables;


import javax.persistence.*;
import java.util.List;


/**
 * This entity represents an opening. An opening is made of a specific
 * sequence of moves at the beginning of the game. This sequence is labelled
 * by an ECO code, an ID that is made of a class (A-E) and an index (00-99). Therefore,
 * each ECO is between A00 and E99. This class comes with the following properties:
 * <ul>
 *     <li>An ID (the full ECO code)</li>
 *     <li>An ECO class</li>
 *     <li>An ECO index</li>
 *     <li>A list of all games that feature this opening</li>
 * </ul>
 * @see Game
 */
@Entity
public class Opening {

    @Id
    @Column(name = "openingId", nullable = false, length = 3)
    private String openingId;

    /**
     * Retrieves this opening's ID. It is a {@code String} of length 3
     * where the first character is the ECO class, followed by the ECO
     * index.
     * @return The ID
     */
    public String getOpeningId() {
        return openingId;
    }

    /**
     * Sets this opening's ID. Note that it should be a valid
     * ECO code.
     * @param openingId The ID
     */
    public void setOpeningId(String openingId) {
        this.openingId = openingId;
    }

    ////////////////////////////////////////////////////////


    @Column(name = "ecoClass", nullable = false)
    private char ecoClass;

    /**
     * Retrieves this opening's ECO class. It is between 'A' and 'E'.
     * @return The ECO class
     */
    public char getEcoClass() {
        return ecoClass;
    }

    /**
     * Sets this opening's ECO class. Note that it should be between 'A' and 'E'.
     * @param ecoClass The ECO class
     */
    public void setEcoClass(char ecoClass) {
        this.ecoClass = ecoClass;
    }

    ////////////////////////////////////////////////////////


    @Column(name = "ecoIndex", nullable = false)
    private int ecoIndex;

    /**
     * Retrieves this opening's ECO index. It is between 0 and 99.
     * @return The ECO index
     */
    public int getEcoIndex() {
        return ecoIndex;
    }

    /**
     * Sets this opening's ECO index. Note that it should be between
     * 0 and 99.
     * @param ecoIndex The ECO index
     */
    public void setEcoIndex(int ecoIndex) {
        this.ecoIndex = ecoIndex;
    }


    ////////////////////////////////////////////////////////

    @OneToMany(mappedBy = "opening", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.MERGE})
    @Column(name = "games")
    private List<Game> games;

    /**
     * Retrieves a list of {@linkplain Game}s that feature this opening.
     * @return A list of games
     */
    public List<Game> getGames() {
        return games;
    }

    /**
     * Sets the list of {@linkplain Game}s that feature this opening.
     * @param games A list of games
     */
    public void setGames(List<Game> games) {
        this.games = games;
    }

}
