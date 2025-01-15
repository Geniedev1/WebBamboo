// admin-shows.component.ts
import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/Show';
import { BookingService } from 'src/app/services/booking.service';
import { MovieService } from 'src/app/services/movie.service';
import { ShowService } from 'src/app/services/shows.service';
import { TheatreService } from 'src/app/services/theatre.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-shows',
  templateUrl: './admin-shows.component.html',
  styleUrls: ['./admin-shows.component.css']
})
export class AdminShowsComponent implements OnInit {

  shows: Show[] = [];
  showAddShowForm = false;
  newShow: Show = {
    id: 0,
    showName: '',
    showDateTime: '',
    theatreName: '',
    movieName: ''
  };
  minDateTime: string;

  theatres: any[] = [];
  movies: any[] = [];

  // Object to store ticket counts for each show
  ticketsSoldMap: { [key: number]: Observable<number> } = {};

  constructor(
    private movieService: MovieService,
    private showService: ShowService,
    private theatreService: TheatreService,
    private bookingService: BookingService
  ) { 
    const currentDateTime = new Date();
    currentDateTime.setMinutes(currentDateTime.getMinutes() + 1); // Add 1 minute to ensure future dates are allowed
    this.minDateTime = currentDateTime.toISOString().slice(0, 16);
  }

  ngOnInit() {
    this.getAllShows();
    this.getAllTheatres();
    this.getAllMovies();
  }

  getAllShows() {
    this.showService.getAllShows().subscribe(
      (shows: Show[]) => {
        this.shows = shows;
      },
      error => {
        console.error('Error fetching shows:', error);
      }
    );
  }

  getAllTheatres() {
    this.theatreService.getAllTheatres().subscribe(
      (theatres: any[]) => {
        this.theatres = theatres;
      },
      error => {
        console.error('Error fetching theatres:', error);
      }
    );
  }

  getAllMovies() {
    this.movieService.getAllMovies().subscribe(
      (movies: any[]) => {
        this.movies = movies;
      },
      error => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  addShow() {
    if (this.newShow.showName.trim() !== '') {
      this.showService.addShow(this.newShow).subscribe(
        (addedShow: Show) => {
          this.shows.push(addedShow);
          this.resetNewShow();
        },
        error => {
          console.error('Error adding show:', error);
        }
      );
    }
  }

  removeShowById(id: number) {
    this.showService.removeShowById(id).subscribe(
      () => {
        this.shows = this.shows.filter(show => show.id !== id);
        // Remove the ticket count for the deleted show
        delete this.ticketsSoldMap[id];
      },
      error => {
        console.error('Error removing show:', error);
      }
    );
  }

  // Get the ticket count for a show
  getTicketsSold(showId: number): Observable<number> {
    if (!this.ticketsSoldMap[showId]) {
      this.ticketsSoldMap[showId] = this.bookingService.seatsSoldByShowId(showId);
    }
    return this.ticketsSoldMap[showId];
  }

  resetNewShow() {
    this.newShow = {
      id: 0,
      showName: '',
      showDateTime: '',
      theatreName: '',
      movieName: ''
    };
    this.showAddShowForm = false;
  }
}
