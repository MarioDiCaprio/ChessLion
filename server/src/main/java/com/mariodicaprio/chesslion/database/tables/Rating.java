package com.mariodicaprio.chesslion.database.tables;


import javax.persistence.*;


/**
 * This class represents a set of ELO ratings. Since there is no single
 * rating, this class splits into the following rating categories:
 * <ul>
 *     <li>Bullet</li>
 *     <li>Blitz</li>
 *     <li>Rapid</li>
 *     <li>Classic</li>
 * </ul>
 * Additionally, each object can be identified by its unique ID in order to
 * 'belong' to exactly one {@link Player}. For this purpose, it also contains a reference
 * to the player it belongs to.
 * @see Player
 */
@Entity
public class Rating {

    @Id
    @Column(name = "ratingId", nullable = false)
    private long ratingId;

    /**
     * Retrieves this rating's unique ID.
     * @return The ID
     */
    public long getRatingId() {
        return ratingId;
    }

    /**
     * Sets the ID of this rating. Note that each ID should be unique.
     * By default, it is generated automatically.
     * @param ratingId The ID
     */
    public void setRatingId(long ratingId) {
        this.ratingId = ratingId;
    }

    ////////////////////////////////////////////////////////

    @OneToOne(mappedBy = "rating", fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.MERGE})
    @JoinColumn(name = "playerId")
    private Player player;

    /**
     * Retrieves the {@link Player} this rating belongs to.
     * @return The player
     */
    public Player getPlayer() {
        return player;
    }

    /**
     * Sets the {@link Player} this rating belongs to. Note that it should correspond
     * to exactly one player.
     * @param player The player
     */
    public void setPlayer(Player player) {
        this.player = player;
    }

    ////////////////////////////////////////////////////////

    @Column(name = "bullet")
    private int bullet = 1400;

    /**
     * Retrieves the bullet rating.
     * @return The bullet rating
     */
    public int getBullet() {
        return bullet;
    }

    /**
     * Sets the bullet rating.
     * @param bullet The bullet rating
     */
    public void setBullet(int bullet) {
        this.bullet = bullet;
    }

    ////////////////////////////////////////////////////////


    @Column(name = "blitz")
    private int blitz = 1400;

    /**
     * Retrieves the blitz rating.
     * @return The blitz rating
     */
    public int getBlitz() {
        return blitz;
    }

    /**
     * Sets the blitz rating.
     * @param blitz The blitz rating
     */
    public void setBlitz(int blitz) {
        this.blitz = blitz;
    }

    ////////////////////////////////////////////////////////

    @Column(name = "rapid")
    private int rapid = 1400;

    /**
     * Retrieves the rapid rating.
     * @return The rapid rating
     */
    public int getRapid() {
        return rapid;
    }

    /**
     * Sets the rapid rating.
     * @param rapid The rapid rating
     */
    public void setRapid(int rapid) {
        this.rapid = rapid;
    }

    ////////////////////////////////////////////////////////

    @Column(name = "classic")
    private int classic = 1400;

    /**
     * Retrieves the classic rating.
     * @return The classic rating
     */
    public int getClassic() {
        return classic;
    }

    /**
     * Sets the classic rating.
     * @param classic The classic rating
     */
    public void setClassic(int classic) {
        this.classic = classic;
    }

}
