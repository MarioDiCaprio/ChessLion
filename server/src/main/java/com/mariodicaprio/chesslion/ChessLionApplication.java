package com.mariodicaprio.chesslion;

import com.mariodicaprio.chesslion.database.DatabaseManager;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * This is the main Spring Boot Application.
 */
@SpringBootApplication
public class ChessLionApplication {

	/**
	 * The main method.
	 * @param args The arguments.
	 */
	public static void main(String[] args) {
		// TODO This method call recreates the whole database. Implement proper testing!
		DatabaseManager.simpleSession(s -> null);
		SpringApplication.run(ChessLionApplication.class, args);
	}

}
