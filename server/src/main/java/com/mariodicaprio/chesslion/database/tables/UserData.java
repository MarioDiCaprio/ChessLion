package com.mariodicaprio.chesslion.database.tables;


import javax.persistence.*;


/**
 * This class represents a user's info. The data stored in instances
 * of this class contain public and private info such as the following:
 * <ul>
 *     <li>The user's real name</li>
 * </ul>
 */
@Entity
public class UserData {

    @Id
    @GeneratedValue
    @Column
    private long userDataId;

    /**
     * Retrieves the data's ID
     * @return The ID
     */
    public long getUserDataId() {
        return userDataId;
    }

    /**
     * Sets the data's ID
     * @param userDataId The ID
     */
    public void setUserDataId(long userDataId) {
        this.userDataId = userDataId;
    }

    ////////////////////////////////////////////////////////

    @OneToOne(mappedBy = "userData", fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.MERGE})
    @JoinColumn(name="playerId")
    private LionPlayer lionPlayer;

    /**
     * Retrieves the user associated with this data.
     * @return The user
     */
    public LionPlayer getLionPlayer() {
        return lionPlayer;
    }

    /**
     * Sets the user associated with this data.
     * @param lionPlayer The user
     */
    public void setLionPlayer(LionPlayer lionPlayer) {
        this.lionPlayer = lionPlayer;
    }

    /////////////////////////////////////////////////////////////////

    @Column
    private String realName;

    /**
     * Retrieve's the user's real name.
     * @return The name
     */
    public String getRealName() {
        return realName;
    }

    /**
     * Sets the user's real name.
     * @param realName The name
     */
    public void setRealName(String realName) {
        this.realName = realName;
    }

    /////////////////////////////////////////////////////////////////

}
