package com.example.kino;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Comparator;
import java.util.List;
@Repository
public class KinoRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBillett (Billetter billetter) {
        String sql = "INSERT INTO Billetter(velgFilm, antallet, fornavnet, etternavnet, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, billetter.getVelgFilm(), billetter.getAntall(), billetter.getFornavn(), billetter.getEtternavn(), billetter.getTelefonnr(), billetter.getEpost());
    }

    public List<Billetter> hentAlleBilletter(){
        String sql = "SELECT * FROM Billetter;";
        List<Billetter> alleBilletter = db.query(sql, new BeanPropertyRowMapper(Billetter.class));
      
        return alleBilletter;
    }

    public void slettAlle(){
        String sql ="DELETE FROM Billetter";
        db.update(sql);
    }
}



