// booking.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/Booking'; // Assuming the model is in a 'models' folder
import { UserBooking } from '../models/user-booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = 'http://localhost:8585/api/bookings';

  constructor(private http: HttpClient) {}

  bookSeat(booking: Booking): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/bookSeat`, booking);
  }
  

  getSeatNumbersByShowId(showId: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/getSeatNumbersByShowId/${showId}`);
  }

  getSeatNumbersByUserId(userId: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/getSeatNumbersByUserId/${userId}`);
  }

  getUserBookings(userId: number): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/getUserBookingsDTO/${userId}`);
  }
  seatsSoldByShowId(showId: number): Observable<number> {
    
    return this.http.get<number>(`${this.apiUrl}/totalSeatsByShowId/${showId}`);

  }  removeBooking(bookingId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/removeBooking/${bookingId}`);
  }
}


