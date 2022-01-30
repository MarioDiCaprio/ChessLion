package com.mariodicaprio.chesslion.database.tables;


import javax.persistence.*;


/**
 * This entity is a subclass of {@link Player}. This class references all users
 * of this website. Therefore, it extends its parent's functionality
 * by adding the following properties:
 * <ul>
 *     <li>A unique username</li>
 *     <li>An email</li>
 *     <li>A password (encrypted)</li>
 *     <li>Additional user data</li>
 * </ul>
 * @see Player
 * @see ChessPlayer
 * @see UserData
 */
@Entity
public class LionPlayer extends Player {

    @Column(name = "username")
    private String username;

    /**
     * Retrieves the username of this player.
     * @return The username
     */
    public String getUsername() {
        return username;
    }

    /**
     * Sets the username of this player. Note that all usernames
     * should be unique.
     * @param username The username
     */
    public void setUsername(String username) {
        this.username = username;
    }

    ////////////////////////////////////////////////////////

    @Column(name = "email")
    private String email;

    /**
     * Retrieves the email associated with this player.
     * @return The email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Sets the email associated with this player.
     * @param email The email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    ////////////////////////////////////////////////////////

    @Column(name = "password")
    private String password;

    /**
     * Retrieves the password of this user. Note that the
     * password is encrypted.
     * @return The password
     */
    public String getPassword() {
        return password;
    }

    /**
     * Sets the password of this user. Note that the password should be encrypted.
     * @param password The password
     */
    public void setPassword(String password) {
        this.password = password;
    }

    //////////////////////////////////////////////////////////////

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "userDataId")
    private UserData userData;

    /**
     * Retrieves this user's data.
     * @return The user's data
     */
    public UserData getUserData() {
        return userData;
    }

    /**
     * Sets this user's data.
     * @param userData The user's data
     */
    public void setUserData(UserData userData) {
        this.userData = userData;
    }

}
