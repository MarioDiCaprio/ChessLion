package com.mariodicaprio.chesslion.database;

import com.mariodicaprio.chesslion.database.tables.*;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.util.function.Function;


/**
 * This class manages sessions for the database 'chesslion'. It contains a
 * {@link Configuration} for the database and a corresponding {@link SessionFactory}.
 * The database should be accessed either by manually opening a session using the
 * {@code getFactory} method or by using utility methods this class provides.
 * All fields and methods are static and this class cannot be instantiated.
 */
public class DatabaseManager {

    /** The configuration for the database **/
    private static final Configuration config;
    /** The SessionFactory for the database **/
    private static final SessionFactory factory;

    static {
        config = new Configuration()
                .configure()
                .addAnnotatedClass(Rating.class)
                .addAnnotatedClass(Opening.class)
                .addAnnotatedClass(Game.class)
                .addAnnotatedClass(Player.class)
                .addAnnotatedClass(LionPlayer.class)
                .addAnnotatedClass(ChessPlayer.class);
        factory = config.buildSessionFactory();
    }

    /**
     * Let no-one instantiate this class
     */
    private DatabaseManager() {}

    /**
     * Retrieves the {@link SessionFactory} that is connected to the database.
     * All sessions should be opened through this field.
     * @return The {@link SessionFactory} for the database
     */
    public static SessionFactory getFactory() {
        return factory;
    }

    /**
     * Opens a simple {@link Session} to the database. The {@link Function} parameter
     * accepts a {@code Session} object as its only parameter and returns {@code null}.
     * Note that it is necessary to both begin a {@link Transaction} and closing the
     * session object as well.
     * @param f The {@code Function} that provides the {@code Session} object
     */
    public static void simpleSession(Function<Session, Void> f) {
        Session s = factory.openSession();
        f.apply(s);
    }

}
