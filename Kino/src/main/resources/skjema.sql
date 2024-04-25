
CREATE TABLE Billetter(
    id INTEGER AUTO_INCREMENT NOT NULL,
    film VARCHAR(223) NOT NULL,
    antall INTEGER NOT NULL,
    fornavn VARCHAR(223) NOT NULL,
    etternavn VARCHAR(223) NOT NULL,
    telefonnr INTEGER NOT NULL,
    PRIMARY KEY (id)
);
