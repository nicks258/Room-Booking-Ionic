CREATE TABLE IF NOT EXISTS developer(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,skill TEXT,yearsOfExperience INTEGER);
CREATE TABLE IF NOT EXISTS meeting_table(id INTEGER PRIMARY KEY AUTOINCREMENT,coparts_id TEXT CONSTRAINT coparts_id_CONSTRAINT_UNIQUE UNIQUE,coparts_name TEXT);
INSERT INTO developer(name, skill, yearsOfExperience) VALUES ('Simon', 'Ionic', '4');
INSERT INTO developer(name, skill, yearsOfExperience) VALUES ('Jorge', 'Firebase', '2');
INSERT INTO developer(name, skill, yearsOfExperience) VALUES ('Max', 'Startup', '5');
