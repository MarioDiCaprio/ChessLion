DROP DATABASE IF EXISTS chesslion;
CREATE DATABASE chesslion;
USE chesslion;


########################################################
# Tables
########################################################

CREATE TABLE Game(
	GameId int auto_increment not null,
    GameWhiteId varchar(255) unique not null,
    GameBlackId varchar(255) unique not null,
    GameOpeningId char(3) unique not null,
    GamePgn Text not null,
    GameDate date,
    PRIMARY KEY (GameId)
);

CREATE TABLE Opening(
	OpeningId char(3) unique not null,
    OpeningEcoClass char(1) not null,
    OpeningEcoIndex char(2) not null,
    OpeningMoves Text not null,
    PRIMARY KEY (OpeningId)
);

CREATE TABLE Player(
	PlayerId int auto_increment not null,
    PlayerFirstName varchar(255) not null,
    PlayerLastName varchar(255) not null,
    PRIMARY KEY (PlayerId)
);

CREATE TABLE LionUser(
	UserId int auto_increment not null,
    UserName varchar(255) not null,
    UserEmail varchar(255) not null,
    UserPassword varchar(255) not null,
    UserSettings Text default null,
    PRIMARY KEY (UserId)
);


########################################################
# Relationships
########################################################

CREATE TABLE GameOpening(
	GameId int not null,
    OpeningId char(3) not null,
    FOREIGN KEY (GameId) REFERENCES Game(GameId),
    FOREIGN KEY (OpeningId) REFERENCES Opening(OpeningId)
);

CREATE TABLE PlayerGame(
	BlackId int not null,
	WhiteId int not null,
    GameId int not null,
    FOREIGN KEY (WhiteId) REFERENCES Player(PlayerId),
    FOREIGN KEY (BlackId) REFERENCES Player(PlayerId),
    FOREIGN KEY (GameId) REFERENCES Game(GameId)
);

CREATE TABLE PlayerOpening(
	PlayerId int not null,
    OpeningId char(3) not null,
    FOREIGN KEY (PlayerId) REFERENCES Player(PlayerId),
    FOREIGN KEY (OpeningId) REFERENCES Opening(OpeningId)
);

CREATE TABLE UserOpening(
	UserId int not null,
    OpeningId char(3) not null,
    FOREIGN KEY (UserId) REFERENCES LionUser(UserId),
    FOREIGN KEY (OpeningId) REFERENCES Opening(OpeningId)
);

CREATE TABLE UserGame(
	BlackId int not null,
	WhiteId int not null,
    GameId int not null,
    FOREIGN KEY (WhiteId) REFERENCES LionUser(UserId),
    FOREIGN KEY (BlackId) REFERENCES LionUser(UserId),
    FOREIGN KEY (GameId) REFERENCES Game(GameId)
);
