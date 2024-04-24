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
    private JdbcTemplate rep;

    public void lagrebillett (Billetter billetter) {
        String sql = "INSERT INTO Billetter(velgFilm, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        rep.update(sql, billetter.getVelgFilm(), billetter.getAntall(), billetter.getFornavn(), billetter.getEtternavn(), billetter.getTelefonnr(), billetter.getEpost());
    }

    public List<Billetter> hentAlle(){
        String sql = "SELECT * FROM Billetter";
        List<Billetter> alleBilletter = rep.query(sql, new BeanPropertyRowMapper(Billetter.class));
        alleBilletter.sort(Comparator.comparing(Billetter::getEtternavn));
        return alleBilletter;
    }

    public void slettAlle(){
        String sql ="DELETE FROM Billetter";
        rep.update(sql);
    }
}


