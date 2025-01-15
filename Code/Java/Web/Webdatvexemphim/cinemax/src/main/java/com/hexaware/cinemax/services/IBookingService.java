// IBookingService.java (Service)
package com.hexaware.cinemax.services;

import com.hexaware.cinemax.dto.BookingDTO;

import java.util.List;

public interface IBookingService {

    void bookSeat(BookingDTO bookingDTO);

    List<String> getSeatNumbersByShowId(int showId);

	List<String> getSeatNumbersByUserId(int userId);

    List<Object[]> getUserBookings(int userId);
    List<BookingDTO> getBookingDTOsByUserId(int userId);

    int getTotalSeatNumbersByShowId(int showId);

    void removeBookingById(int bookingId);

    
}
