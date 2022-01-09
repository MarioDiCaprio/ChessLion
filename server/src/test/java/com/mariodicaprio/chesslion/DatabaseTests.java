package com.mariodicaprio.chesslion;

import com.mariodicaprio.chesslion.database.DatabaseManager;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;


public class DatabaseTests {

    /**
     * Asserts whether the database and its corresponding tables
     * work properly. Note that the functionality and relationships
     * of the tables and the ORM mapping is not tested. Also, this test
     * will fail if a connection to the database cannot be established.
     */
    @Test
    public void assertTablesWork() {
        boolean success = true;
        try {
            // initializes session factory + tables
            DatabaseManager.simpleSession(session -> null);
        } catch (Exception e) {
            e.printStackTrace();
            success = false;
        }
        assertTrue(success);
    }

}
