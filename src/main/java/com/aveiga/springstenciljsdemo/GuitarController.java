package com.aveiga.springstenciljsdemo;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GuitarController {
    @GetMapping(path = "/guitars")
    public ResponseEntity<List<Guitar>> findAll() {
        return new ResponseEntity<>(Arrays.asList(new Guitar("Fender", "Strat"), new Guitar("Gibson", "Les Paul")),
                HttpStatus.OK);
    }
}
