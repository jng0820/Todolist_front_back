CREATE TABLE IF NOT EXISTS todolist.Todolist(
	TODO_IDX int AUTO_INCREMENT, 
	TITLE varchar(255) NOT NULL, 
	CONTENT MEDIUMTEXT, 
	EXPIRED_DATE varchar(64), 
	PRIORITY int, 
	USER varchar(256),
	PRIMARY KEY (TODO_IDX) 
);
