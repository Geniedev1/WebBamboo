// BookingRepository.java
package com.hexaware.cinemax.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hexaware.cinemax.entities.Booking;
import com.hexaware.cinemax.entities.User;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

    @Query("SELECT b.seatNumbers FROM Booking b WHERE b.show.id = :showId")
    List<String> findSeatNumbersByShowId(@Param("showId") int showId);

    @Query("SELECT b.seatNumbers FROM Booking b WHERE b.user.id = :userId")

	List<String> findSeatNumbersByUserId(int userId);

    @Query("SELECT b.show.id, b.id, b.seatNumbers FROM Booking b WHERE b.user.id = :userId")
    List<Object[]> getUserBookings(@Param("userId") int userId);

	List<Booking> findByUser(User user);
    

    
}
