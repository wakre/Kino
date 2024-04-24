package com.example.kino;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Comparator;
import java.util.List;
@Repository
public class KinoRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagrebillett (Billetter billetter) {
        String sql = "INSERT INTO Billetter(velgFilm, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, billetter.getVelgFilm(), billetter.getAntall(), billetter.getFornavn(), billetter.getEtternavn(), billetter.getTelefonnr(), billetter.getEpost());
    }

    public List<Billetter> hentAlle(){
        String sql = "SELECT * FROM Billetter ORDER BY etternavn";
        List<Billetter> alleBilletter = db.query(sql, new BeanPropertyRowMapper(Billetter.class));
        return alleBilletter;
    }

    public void slettAlle(){
        String sql ="DELETE * FROM Billetter";
        db.update(sql);
    }
}


