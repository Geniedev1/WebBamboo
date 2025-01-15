package com.hexaware.cinemax.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

public class MovieDTO {

	@NotBlank(message = "Title is required")
    private String title;
	@NotBlank(message = "Genre is required")
    private String genre;
	@NotBlank(message = "Director is required")
    private String director;
	@Positive(message = "Duration must be a positive number")
    private int duration;
	@Positive(message = "Rating must be a positive number")
    private double rating;

    public MovieDTO() {

    super();
    }

    public MovieDTO(String title, String genre, String director, int duration, double rating) {
        this.title = title;
        this.genre = genre;
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }

    // Getters and setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }
}
