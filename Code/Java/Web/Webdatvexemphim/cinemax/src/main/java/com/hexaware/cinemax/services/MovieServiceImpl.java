package com.hexaware.cinemax.services;

import com.hexaware.cinemax.dto.MovieDTO;
import com.hexaware.cinemax.entities.Movie;
import com.hexaware.cinemax.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MovieServiceImpl implements IMovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public MovieDTO addMovie(MovieDTO movieDTO) {
        // Assuming MovieDTO has a constructor that copies the values
        MovieDTO newMovie = new MovieDTO(
                movieDTO.getTitle(),
                movieDTO.getGenre(),
                movieDTO.getDirector(),
                movieDTO.getDuration(),
                movieDTO.getRating()
        );

        // Convert MovieDTO to Movie entity and save it to the repository
        Movie savedMovie = movieRepository.save(convertToEntity(newMovie));

        // Assuming MovieDTO has a constructor that copies the values and sets the ID
        return new MovieDTO(
                savedMovie.getTitle(),
                savedMovie.getGenre(),
                savedMovie.getDirector(),
                savedMovie.getDuration(),
                savedMovie.getRating()
        );
    }

    @Override
    public List<MovieDTO> getAllMovies() {
        // Retrieve all movies from the repository and convert them to MovieDTO
        return movieRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public void removeMovie(int id) {
        // Remove the movie with the specified ID from the repository
        movieRepository.deleteById(id);
    }

    @Override
    public void removeMovieByName(String name) {
        // Find movies by name and remove them from the repository
        Movie moviesToRemove = movieRepository.findByTitle(name);
        movieRepository.delete(moviesToRemove);
    }
    @Override
    public Movie getMovieByName(String name) {
        // Find a movie by name from the repository and convert it to MovieDTO
        Movie movie = movieRepository.findByTitle(name);
        return movie;
    }
    // Helper method to convert MovieDTO to Movie entity
    private Movie convertToEntity(MovieDTO movieDTO) {
        Movie movie = new Movie();
        movie.setTitle(movieDTO.getTitle());
        movie.setGenre(movieDTO.getGenre());
        movie.setDirector(movieDTO.getDirector());
        movie.setDuration(movieDTO.getDuration());
        movie.setRating(movieDTO.getRating());
        return movie;
    }

    // Helper method to convert Movie entity to MovieDTO
    private MovieDTO convertToDTO(Movie movie) {
        return new MovieDTO(
                movie.getTitle(),
                movie.getGenre(),
                movie.getDirector(),
                movie.getDuration(),
                movie.getRating()
        );
    }
}
