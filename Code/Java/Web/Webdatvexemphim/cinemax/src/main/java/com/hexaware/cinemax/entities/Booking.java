// Booking.java (Entity)
package com.hexaware.cinemax.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;


@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private Show show;

    @ManyToOne
    private User user;

    // Updated to use a comma-separated string for seat numbers
    private String seatNumbers;

    public Booking() {
        // Default constructor
    }

    // Updated constructor to accept a comma-separated string of seat numbers
    public Booking(Show show, User user, String seatNumbers) {
        this.show = show;
        this.user = user;
        this.seatNumbers = seatNumbers;
    }

    // Getters and setters for all fields

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Show getShow() {
        return show;
    }

    public void setShow(Show show) {
        this.show = show;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getSeatNumbers() {
        return seatNumbers;
    }

    public void setSeatNumbers(String seatNumbers) {
        this.seatNumbers = seatNumbers;
    }
}