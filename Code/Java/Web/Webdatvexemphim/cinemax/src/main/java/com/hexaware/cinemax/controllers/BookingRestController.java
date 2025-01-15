// BookingController.java
package com.hexaware.cinemax.controllers;

import com.hexaware.cinemax.dto.BookingDTO;
import com.hexaware.cinemax.services.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/bookings")
public class BookingRestController {

    @Autowired
    private IBookingService bookingService;

    @PostMapping("/bookSeat")
    public ResponseEntity<Map<String, String>> bookSeat(@RequestBody BookingDTO bookingDTO) {
        bookingService.bookSeat(bookingDTO);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Seat booked successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/getSeatNumbersByShowId/{showId}")
    public ResponseEntity<List<String>> getSeatNumbersByShowId(@PathVariable int showId) {
        List<String> seatNumbers = bookingService.getSeatNumbersByShowId(showId);
        return ResponseEntity.ok(seatNumbers);
    }
    @GetMapping("/getSeatNumbersByUserId/{userId}")
    public ResponseEntity<List<String>> getSeatNumbersByUserId(@PathVariable int userId) {
        List<String> seatNumbers = bookingService.getSeatNumbersByUserId(userId);
        return ResponseEntity.ok(seatNumbers);
    }
    @GetMapping("/getUserBookings/{userId}")
    public ResponseEntity<List<Object[]>> getUserBookings(@PathVariable int userId) {
        List<Object[]> userBookings = bookingService.getUserBookings(userId);
        return ResponseEntity.ok(userBookings);
    }
    @GetMapping("/getUserBookingsDTO/{userId}")
    public ResponseEntity<List<BookingDTO>> getUserBookingsDTO(@PathVariable int userId) {
        List<BookingDTO> userBookings = bookingService.getBookingDTOsByUserId(userId);
        return ResponseEntity.ok(userBookings);
    }
    
    @GetMapping("/totalSeatsByShowId/{showId}")
    public ResponseEntity<Integer> getTotalSeatNumbersByShowId(@PathVariable int showId) {
        int totalSeatNumbers = bookingService.getTotalSeatNumbersByShowId(showId);
        return new ResponseEntity<>(totalSeatNumbers, HttpStatus.OK);
    }
    @DeleteMapping("/removeBooking/{bookingId}")
    public ResponseEntity<Void> removeBookingById(@PathVariable int bookingId) {
        bookingService.removeBookingById(bookingId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
