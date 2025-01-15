// BookingDTO.java (DTO)
package com.hexaware.cinemax.dto;

import java.util.List;

public class BookingDTO {

	private int id;
    private int showId;
    private int userId;
    private List<String> seatNumbers;  // Represents multiple seat numbers for a booking

    public BookingDTO() {
        // Default constructor
    }

    public BookingDTO(int id,int showId, int userId, List<String> seatNumbers) {
        this.id=id;
    	this.showId = showId;
        this.userId = userId;
        this.seatNumbers = seatNumbers;
    }

    // Getters and setters for all fields
    

    public int getShowId() {
        return showId;
    }

    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setShowId(int showId) {
        this.showId = showId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public List<String> getSeatNumbers() {
        return seatNumbers;
    }

    public void setSeatNumbers(List<String> seatNumbers) {
        this.seatNumbers = seatNumbers;
    }
}
