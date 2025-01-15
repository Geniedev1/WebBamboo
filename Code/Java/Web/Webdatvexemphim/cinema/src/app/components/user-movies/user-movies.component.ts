import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/Show';
import { Movie } from 'src/app/models/Movie';
import { ShowService } from 'src/app/services/shows.service';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-movies',
  templateUrl: './user-movies.component.html',
  styleUrls: ['./user-movies.component.css'],
})
export class UserMoviesComponent implements OnInit {
  shows: Show[] = [];
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  searchTerm: string = '';
  showVisible: boolean = false;
  user: User | undefined;
  uid: number = 0;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private showService: ShowService,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    // Load all shows
    this.showService.getAllShows().subscribe((shows) => {
      this.shows = shows;

      // Extract unique movie names from shows
      const uniqueMovieNames = Array.from(
        new Set(this.shows.map((show) => show.movieName))
      );

      // Load movie details for each unique movie name
      this.loadMovieDetails(uniqueMovieNames);

      this.route.parent?.params.subscribe((params) => {
        this.uid = +params['id']; // Convert to number

        // Fetch user details based on the user ID using the UserService
        this.userService.getUserById(this.uid).subscribe(
          (user) => {
            this.user = user;
            this.filterMovies();
          },
          (error) => {
            console.error('Error fetching user details:', error);
          }
        );
      });
    });
  }

  loadMovieDetails(movieNames: string[]): void {
    // Load movie details for each movie name
    movieNames.forEach((movieName) => {
      this.movieService.getMovieByName(movieName).subscribe((movie) => {
        this.movies.push(movie);
      });
    });
  }

  // Method to get shows for a specific movie
  getShowsForMovie(movie: Movie): Show[] {
    return this.shows.filter((show) => show.movieName === movie.title);
  }

  toggleShowsVisibility(movie: Movie): void {
    movie.showVisible = !movie.showVisible;
  }

  bookTicket(showId: number): void {
    // Retrieve user ID from the route parameters

    // Navigate to seat-book component
    this.router.navigate(['user-home', this.uid, 'seat-book', showId]);
  }

   // Filter movies based on the search term
   filterMovies(): void {
    if (this.searchTerm.trim() === '') {
      // If search term is empty, display all movies
      this.filteredMovies = this.movies;
    } else {
      // If search term is not empty, filter movies based on the search term
      this.filteredMovies = this.movies.filter((movie) =>
        movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
    // Clear the search input and show all movies
    clearSearch(): void {
      this.searchTerm = '';
      this.filteredMovies = this.movies;
    }
}
