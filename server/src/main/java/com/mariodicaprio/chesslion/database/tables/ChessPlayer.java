package com.mariodicaprio.chesslion.database.tables;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;


/**
 * This entity is a subclass of {@link Player}. It references all
 * real-life chess players. Therefore, it extends its parent's functionality
 * by adding the following properties:
 * <ul>
 *     <li>The player's first name</li>
 *     <li>The player's last name</li>
 *     <li>A date of birth</li>
 *     <li>A date of death</li>
 * </ul>
 * @see Player
 * @see LionPlayer
 */
@Entity
public class ChessPlayer extends Player {

    @Column(name = "firstName")
    private String firstName;

    /**
     * Retrieves the player's first name.
     * @return The first name
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * Sets the player's first name.
     * @param firstName The first name
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    ////////////////////////////////////////////////////////

    @Column(name = "lastName")
    private String lastName;

    /**
     * Retrieves the player's last name.
     * @return The last name
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * Sets the player's last name.
     * @param lastName The last name
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    ////////////////////////////////////////////////////////

    @Temporal(TemporalType.DATE)
    @Column(name = "birth")
    private Date birth;

    /**
     * Retrieves the date of birth of this player
     * @return The date of birth
     */
    public Date getBirth() {
        return birth;
    }

    /**
     * Sets the date of birth of this player.
     * @param birth The date of birth
     */
    public void setBirth(Date birth) {
        this.birth = birth;
    }

    ////////////////////////////////////////////////////////


    @Temporal(TemporalType.DATE)
    @Column(name = "death")
    private Date death;

    /**
     * Retrieves the player's date of death.
     * @return The date of death
     */
    public Date getDeath() {
        return death;
    }

    /**
     * Sets the player's date of death.
     * @param death The date of death
     */
    public void setDeath(Date death) {
        this.death = death;
    }

}