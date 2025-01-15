package com.hexaware.cinemax.controllers;

import com.hexaware.cinemax.dto.MovieDTO;
import com.hexaware.cinemax.entities.Movie;
import com.hexaware.cinemax.services.IMovieService;

import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/movies")
public class MovieRestController {
	
    private static final Logger logger = LoggerFactory.getLogger(MovieRestController.class);

	


    @Autowired
    private IMovieService movieService;
    

    // Add a new movie
    @PostMapping("/addMovie")
    public ResponseEntity<MovieDTO> addMovie(@RequestBody @Valid MovieDTO movieDTO) {
       
    	logger.info("Adding a new movie: {}", movieDTO.getTitle());

    	MovieDTO createdMovie = movieService.addMovie(movieDTO);
        return new ResponseEntity<>(createdMovie, HttpStatus.CREATED);
    }

    // Get all movies
    @GetMapping("/getAllMovies")
    public ResponseEntity<List<MovieDTO>> getAllMovies() {
        List<MovieDTO> movies = movieService.getAllMovies();
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }

    @GetMapping("/getMovieByName/{title}")
    public ResponseEntity<Movie> getMovieByName(@PathVariable String title) {
        Movie movie = movieService.getMovieByName(title);

        if (movie != null) {
            return new ResponseEntity<>(movie, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    
    
    // Remove a movie by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeMovie(@PathVariable int id) {
        movieService.removeMovie(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    // Remove a movie by name
    @DeleteMapping("/removeByName/{name}")
    public ResponseEntity<Void> removeMovieByName(@PathVariable String name) {
        movieService.removeMovieByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
