import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { Booking } from 'src/app/models/Booking';
import { Show } from 'src/app/models/Show';  // Import the Show interface
import { UserService } from 'src/app/services/user.service';
import { BookingService } from 'src/app/services/booking.service';
import { ShowService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css'],
})
export class UserBookingsComponent implements OnInit {
  user: User | undefined;
  bookings: Booking[] = [];
  shows: Show[] = []; 

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private bookingService: BookingService,
    private showService: ShowService  
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params) => {
      const userId = +params['id']; 
      this.userService.getUserById(userId).subscribe(
        (user) => {
          this.user = user;

          this.bookingService.getUserBookings(userId).subscribe(
            (bookings) => {
              this.bookings = bookings;

              this.bookings.forEach((booking) => {
                this.showService.getShowById(booking.showId).subscribe(
                  (show) => {
                    this.shows.push(show);
                  },
                  (error) => {
                    console.error('Error fetching show details:', error);
                  }
                );
              });
            },
            (error) => {
              console.error('Error fetching user bookings:', error);
            }
          );
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    });
  }
  cancelBooking(bookingId: number | undefined): void {
    if (bookingId === undefined) {
      console.error('Invalid booking ID');
      return;
    }

    const confirmation = window.confirm('Are you sure you want to cancel this booking?');
    if (confirmation) {
      this.bookingService.removeBooking(bookingId).subscribe(
        (response) => {

          this.bookings = this.bookings.filter((booking) => booking.id !== bookingId);

          alert("Booking removed successfully")
        },
        (error) => {
          console.error('Error cancelling booking:', error);
        }
      );
    }
  }

 
}