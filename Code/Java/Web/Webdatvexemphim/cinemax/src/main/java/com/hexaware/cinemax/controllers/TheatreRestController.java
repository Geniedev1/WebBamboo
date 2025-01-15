package com.hexaware.cinemax.controllers;

import com.hexaware.cinemax.dto.TheatreDTO;
import com.hexaware.cinemax.services.ITheatreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/theatres")
public class TheatreRestController {

    @Autowired
    private ITheatreService theatreService;

    // Add a new theatre
    @PostMapping("/addTheatre")
    public ResponseEntity<TheatreDTO> addTheatre(@RequestBody TheatreDTO theatreDTO) {
        TheatreDTO createdTheatre = theatreService.addTheatre(theatreDTO);
        return new ResponseEntity<>(createdTheatre, HttpStatus.CREATED);
    }

    // Get all theatres
    @GetMapping("/getAllTheatres")
    public ResponseEntity<List<TheatreDTO>> getAllTheatres() {
        List<TheatreDTO> theatres = theatreService.getAllTheatres();
        return new ResponseEntity<>(theatres, HttpStatus.OK);
    }

    // Remove a theatre by ID
    @DeleteMapping("/removeTheatre/{id}")
    public ResponseEntity<Void> removeTheatre(@PathVariable int id) {
        theatreService.removeTheatreById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Remove a theatre by name
    @DeleteMapping("/removeByName/{name}")
    public ResponseEntity<Void> removeTheatreByName(@PathVariable String name) {
        theatreService.removeTheatreByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @GetMapping("/getTheatreByName/{name}")
    public ResponseEntity<TheatreDTO> getTheatreByName(@PathVariable String name) {
        TheatreDTO theatre = theatreService.getTheatreByName(name);
        return new ResponseEntity<>(theatre, HttpStatus.OK);
    }
}
