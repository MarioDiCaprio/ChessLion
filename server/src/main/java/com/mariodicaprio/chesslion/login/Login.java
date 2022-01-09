package com.mariodicaprio.chesslion.login;


import com.mariodicaprio.chesslion.database.DatabaseManager;
import com.mariodicaprio.chesslion.database.tables.LionPlayer;

import java.util.List;


/**
 * This class represents a stateless object that belongs to the {@link LoginController}
 * class. It is the data that displays an attempt of logging in to a website, which has
 * the following basic properties:
 * <ul>
 *     <li>A username</li>
 *     <li>A password</li>
 *     <li>Whether the login is valid</li>
 * </ul>
 * This class is then parsed as a JSON object.
 * @see LoginController
 */
public class Login {

    private final String username;
    private final String password;
    private final boolean isValid;


    /**
     * Builds an instance of this class. First, the username and the
     * password are assigned directly. Afterwards, the database is looked
     * up for correspondence of the given data. If a match was found,
     * this login is considered valid and invalid if no match was found.
     * @param username The username to log in with
     * @param password The password to log in with
     */
    public Login(String username, String password) {
        this.username = username;
        this.password = password;

        var tmp = new Object() { public boolean result = false; };
        DatabaseManager.simpleSession(session -> {
            session.beginTransaction();
            List<?> q =session.createSQLQuery(
                    "SELECT * FROM LionPlayer " +
                    "WHERE username='" + username + "' AND password='" + password + "';"
            ).addEntity(LionPlayer.class).getResultList();
            if (q.size() > 0) {
                LionPlayer obj = (LionPlayer) q.get(0);
                if (obj.getUsername().equals(username) && obj.getPassword().equals(password))
                    tmp.result = true;
            }
            return null;
        });

        this.isValid = tmp.result;
    }


    /**
     * Retrieves the username of this login session.
     * @return The username
     */
    public String getUsername() {
        return username;
    }

    /**
     * Retrieves the password of this login session.
     * @return The password
     */
    public String getPassword() {
        return password;
    }

    /**
     * Retrieves the validity of this login.
     * @return Whether the login was valid
     */
    public boolean isValid() {
        return isValid;
    }

}
