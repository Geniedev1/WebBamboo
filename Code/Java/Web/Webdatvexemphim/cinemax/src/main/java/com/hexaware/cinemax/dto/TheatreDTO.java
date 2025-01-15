package com.hexaware.cinemax.dto;

public class TheatreDTO {

    private String name;
    private String location;
    private int numberOfRows;
    private int numberOfColumns;

    public TheatreDTO() {
        // Default constructor
    }

    public TheatreDTO(String name, String location, int numberOfRows, int numberOfColumns) {
        this.name = name;
        this.location = location;
        this.numberOfRows = numberOfRows;
        this.numberOfColumns = numberOfColumns;
    }

    // Getters and setters for all fields

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getNumberOfRows() {
        return numberOfRows;
    }

    public void setNumberOfRows(int numberOfRows) {
        this.numberOfRows = numberOfRows;
    }

    public int getNumberOfColumns() {
        return numberOfColumns;
    }

    public void setNumberOfColumns(int numberOfColumns) {
        this.numberOfColumns = numberOfColumns;
    }
}
