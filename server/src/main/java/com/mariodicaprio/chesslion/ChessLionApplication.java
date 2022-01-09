package com.mariodicaprio.chesslion;

import com.mariodicaprio.chesslion.database.DatabaseManager;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ChessLionApplication {

	public static void main(String[] args) {
		DatabaseManager.simpleSession(s -> null);
		SpringApplication.run(ChessLionApplication.class, args);
	}

}
