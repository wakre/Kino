package com.example.kino;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class KinoController {

        @Autowired
        KinoRepository rep;

        @PostMapping("/lagre")
        public void lagrebillett(Billetter innbillett){
                rep.lagrebillett(innbillett);
        }

        @GetMapping("/hentAlle")
        public List<Billetter> hentAlle(){
                return rep.hentAlle();
        }

        @GetMapping("/slett")
        public void slett(){
                rep.slettAlle();
        }
}
