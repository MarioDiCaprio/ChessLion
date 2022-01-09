package com.mariodicaprio.chesslion.login;

import com.mariodicaprio.chesslion.database.DatabaseManager;
import com.mariodicaprio.chesslion.database.tables.LionPlayer;

import java.util.List;


/**
 * This class represents a stateless object that belongs to the {@link RegistrationController}
 * class. It is the data that displays an attempt of signing up to a website, which has
 * the following basic properties:
 * <ul>
 *     <li>A username</li>
 *     <li>An email</li>
 *     <li>A password</li>
 *     <li>Whether the registration is valid</li>
 * </ul>
 * This class is then parsed as a JSON object.
 * @see LoginController
 */
public class Registration {

    private final String username;
    private final String email;
    private final String password;
    private final boolean isValid;


    /**
     * Builds an instance of this class. First, the username, the email and the
     * password are assigned directly. Afterwards, the database is looked
     * up for duplicates of the given data (username only). If a match was found,
     * this login is considered invalid and valid if no match was found. Also,
     * if no match was found the given data is saved in the database.
     * @param username The username to log in with
     * @param email The email to associate with the username
     * @param password The password to log in with
     */
    public Registration(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;

        var tmp = new Object() { public boolean result = true; };
        DatabaseManager.simpleSession(session -> {
            session.beginTransaction();
            List<?> users = session.createSQLQuery(
                    "SELECT * FROM LionPlayer WHERE username='" + username + "';"
            ).getResultList();
            if (users.size() > 0) {
                tmp.result = false;
            } else {
                LionPlayer p = new LionPlayer();
                p.setUsername(username);
                p.setEmail(email);
                p.setPassword(password);
                session.save(p);
                session.getTransaction().commit();
            }
            session.close();
            return null;
        });
        this.isValid = tmp.result;
    }


    /**
     * Retrieves the username of this registration.
     * @return The username
     */
    public String getUsername() {
        return username;
    }

    /**
     * Retrieves the email of this registration
     * @return The email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Retrieves the password of this registration.
     * @return The password
     */
    public String getPassword() {
        return password;
    }

    /**
     * Retrieves the validity of this registration.
     * @return Whether the registration was valid
     */
    public boolean isValid() {
        return isValid;
    }

}
