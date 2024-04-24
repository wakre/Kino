CREATE TABLE Filmer(
                       film VARCHAR(20) NOT NULL,
                       PRIMARY KEY (film)
);

CREATE TABLE Billetter(
                          id SMALLINT NOT NULL AUTO_INCREMENT,
                          film CHAR(20) NOT NULL,
                          antall VARCHAR(2) NOT NULL,
                          fornavn VARCHAR(20) NOT NULL,
                          etternavn VARCHAR(20) NOT NULL,
                          telefonnr VARCHAR(8) NOT NULL,
                          PRIMARY KEY (id),
                          FOREIGN KEY (film) references Filmer(film)
);
