package com.hexaware.cinemax.dto;

import java.time.LocalDateTime;


public class ShowDTO {

    private int id;
    private String showName;
    private LocalDateTime showDateTime;
    private String theatreName;
    private String movieName;

    public ShowDTO() {
        // Default constructor
    }

    public ShowDTO(int id, String showName, LocalDateTime showDateTime, String theatreName, String movieName) {
        this.id = id;
        this.showName = showName;
        this.showDateTime = showDateTime;
        this.theatreName = theatreName;
        this.movieName = movieName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getShowName() {
        return showName;
    }

    public void setShowName(String showName) {
        this.showName = showName;
    }

    public LocalDateTime getShowDateTime() {
        return showDateTime;
    }

    public void setShowDateTime(LocalDateTime showDateTime) {
        this.showDateTime = showDateTime;
    }

    public String getTheatreName() {
        return theatreName;
    }

    public void setTheatreName(String theatreName) {
        this.theatreName = theatreName;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }
}
