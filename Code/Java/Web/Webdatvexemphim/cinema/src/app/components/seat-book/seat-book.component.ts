// seat-book.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from 'src/app/models/Show';
import { User } from 'src/app/models/User';
import { ShowService } from 'src/app/services/shows.service';
import { UserService } from 'src/app/services/user.service';
import { TheatreService } from 'src/app/services/theatre.service';
import { BookingService } from 'src/app/services/booking.service';
import { Theatre } from 'src/app/models/Theatre';
import { Booking } from 'src/app/models/Booking';

@Component({
  selector: 'app-seat-book',
  templateUrl: './seat-book.component.html',
  styleUrls: ['./seat-book.component.css'],
})
export class SeatBookComponent implements OnInit {
  user: User | undefined;
  show: Show | undefined;
  theatre: Theatre | undefined;
  rows: number | undefined;
  columns: number | undefined;
  selectedSeats: string[] = [];
  bookedSeats: string[] = []; 

  userId:number=0;
  paymentData: string = '';  
showQRCode: boolean = false;  
showPaymentButton: boolean = false;  
  constructor(
    private showService: ShowService,
    private userService: UserService,
    private theatreService: TheatreService,
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router:Router
  ) {}
  onBookTickets(): void {
    if (this.selectedSeats.length > 0) {
      this.paymentData = 'assets/QRTHANHTOAN.png';
      this.showQRCode = true; 
      this.showPaymentButton = true;
    }
  }
  confirmPayment(): void {
  
    this.bookTicket();
  }
  ngOnInit(): void {
    
    const showIdParam = this.route.snapshot.paramMap.get('showId');
    const showId = showIdParam ? +showIdParam : null;

    this.route.parent?.params.subscribe((params) => {
       this.userId = +params['id']; 


      this.userService.getUserById(this.userId).subscribe(
        (user) => {
          console.log('user:ID:', this.userId);
          this.user = user;
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );

      if (showId !== null) {
        this.showService.getShowById(showId).subscribe(
          (show) => {
            this.show = show;

            if (this.show?.theatreName) {
              this.theatreService.getTheatreByName(this.show.theatreName).subscribe(
                (theatre) => {
                  this.theatre = theatre;
                  this.rows = theatre.numberOfRows;
                  this.columns = theatre.numberOfColumns;

                  this.bookingService.getSeatNumbersByShowId(showId).subscribe(
                    (bookedSeats) => {
                      this.bookedSeats = bookedSeats;
                    },
                    (error) => {
                      console.error('Error fetching booked seats:', error);
                    }
                  );
                },
                (error) => {
                  console.error('Error fetching theatre details:', error);
                }
              );
            }
          },
          (error) => {
            console.error('Error fetching show details:', error);
          }
        );
      }
    });
  }

  getRange(num: number): number[] {
    return new Array(num).fill(0).map((_, index) => index + 1);
  }

  toggleSeat(row: number, seatNumber: number) {
    const seat = `${String.fromCharCode(65 + row - 1)}${seatNumber}`;
    const index = this.selectedSeats.indexOf(seat);

    if (index === -1 && !this.bookedSeats.includes(seat)) {
      this.selectedSeats.push(seat);
    } else if (index !== -1) {
      this.selectedSeats.splice(index, 1);
    }
  }

  isSeatSelected(row: number, seatNumber: number): boolean {
    const seat = `${String.fromCharCode(65 + row - 1)}${seatNumber}`;
    return this.selectedSeats.includes(seat) || this.bookedSeats.includes(seat);
  }
  isSeatBooked(row: number, seatNumber: number): boolean {
    const seat = `${String.fromCharCode(65 + row - 1)}${seatNumber}`;
    return this.bookedSeats.includes(seat);
  }
  confirmBooking(): void {
    const selectedSeatsMessage = this.selectedSeats.length > 0
      ? '\nSelected Seats: ' + this.selectedSeats.join(', ')
      : '';
  
    const confirmation = window.confirm(`Are you sure you want to book these seats?${selectedSeatsMessage}\nTotal Amount:${this.selectedSeats.length*150}`);
    
    if (confirmation) {
      this.bookTicket();
    } else {
      this.selectedSeats = [];
    }
    }
  bookTicket() {
    if (this.show && this.user && this.selectedSeats.length > 0) {
      const booking: Booking = {
        showId: this.show.id,
        userId: this.user.id,
        seatNumbers: this.selectedSeats,
      };
  
      this.bookingService.bookSeat(booking).subscribe(
        (response) => {
          alert('Booking successful!'); 
          console.log('Booking successful!', response.message);
          this.router.navigate(['user-home', this.userId, 'user-bookings']);
        },
        (error) => {
          console.error('Error booking seats:', error);
        }
      );
    }
  }
  
  
}
