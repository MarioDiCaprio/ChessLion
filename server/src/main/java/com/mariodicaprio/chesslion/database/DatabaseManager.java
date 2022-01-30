package com.mariodicaprio.chesslion.database;

import com.mariodicaprio.chesslion.database.tables.*;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import javax.persistence.RollbackException;


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
                .addAnnotatedClass(UserData.class)
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
     * Opens a simple {@link Session} to the database. The {@link SimpleSession} parameter
     * accepts a {@code Session} object as its only parameter and returns {@code null}.
     * Note that it is necessary to both begin a {@link Transaction} and closing the
     * session object as well.
     * @param s The {@code SimpleSession} that provides the {@code Session} object
     */
    public static void simpleSession(SimpleSession s) {
        Session session = factory.openSession();
        s.begin(session);
    }

    /**
     * Opens a simple {@link Session} to the database and commits a {@link Transaction}.
     * This means that it is no longer necessary to begin a new transaction, nor to
     * close the opened session. Actions with the session can be done via the {@link SimpleSession}
     * parameter, which accepts the opened session as an input.
     * @param s The {@code SimpleSession} that provides the {@code Session} object
     * @throws RollbackException If the transaction commit failed
     * @throws IllegalStateException If the transaction is not active
     */
    public static void simpleSessionWithTransaction(SimpleSession s) throws RollbackException, IllegalStateException {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        try (session) {
            s.begin(session);
            tx.commit();
        } catch (RollbackException e) {
            tx.rollback();
            throw e;
        }
    }


    /**
     * This functional interface provides simplicity to open a session.
     * It provides a single method, {@code begin(session)}, that takes
     * a {@link Session} as an input. This interface is used as a parameter
     * of static methods of the {@link DatabaseManager} class.
     * @see Session
     * @see DatabaseManager
     */
    @FunctionalInterface
    public interface SimpleSession {
        void begin(Session session);
    }

}
