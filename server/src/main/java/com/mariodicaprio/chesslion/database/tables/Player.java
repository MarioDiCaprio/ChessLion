package com.mariodicaprio.chesslion.database.tables;

import javax.persistence.*;
import java.util.*;


/**
 * This entity is a standard player. Note that only its implementations
 * find a practical use, even though this class is fully functional, because
 * of case-dependant data that is taken care of in the respective implementations.
 * In general, a player has the following properties:
 * <ul>
 *     <li>A unique ID</li>
 *     <li>A list of games they played</li>
 *     <li>A rating</li>
 * </ul>
 * @see ChessPlayer
 * @see LionPlayer
 */
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Player {

    @Id
    @GeneratedValue
    @Column(name = "playerId")
    private long playerId;

    /**
     * Retrieves the player's unique ID.
     * @return The player's ID
     */
    public long getPlayerId() {
        return playerId;
    }

    /**
     * Sets the player's ID. Note that the ID should be unique.
     * By default, it is auto-generated.
     * @param playerId The player's ID
     */
    public void setPlayerId(long playerId) {
        this.playerId = playerId;
    }

    ////////////////////////////////////////////////////////

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Column(name = "games")
    private List<Game> games = new ArrayList<>();

    /**
     * Retrieves a list of all {@linkplain Game}s the player has
     * played.
     * @return The games played
     */
    public List<Game> getGames() {
        return games;
    }

    /**
     * Sets the {@linkplain Game}s the player has played.
     * @param games The games played
     */
    public void setGames(List<Game> games) {
        this.games = games;
    }

    ////////////////////////////////////////////////////////

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "ratingId")
    private Rating rating;

    /**
     * Retrieves the {@link Rating} of the player.
     * @return The player's rating
     */
    public Rating getRating() {
        return rating;
    }

    /**
     * Sets the {@link Rating} of the player.
     * @param rating The player's rating
     */
    public void setRating(Rating rating) {
        this.rating = rating;
    }

}
