import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.css']
})
export class AdminMoviesComponent implements OnInit {

  movies: Movie[] = [];
  showAddMovieForm = false;
  newMovie: Movie = {
    title: '',
    genre: '',
    director: '',
    duration: 0,
    rating: 0
  };

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
    this.movieService.getAllMovies().subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
      },
      error => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  addMovie() {
    if (this.newMovie.title.trim() !== '') {
      this.movieService.addMovie(this.newMovie).subscribe(
        (addedMovie: Movie) => {
          this.movies.push(addedMovie);
          this.resetNewMovie();
        },
        error => {
          console.error('Error adding movie:', error);
        }
      );
    }
  }

  removeMovieById(id: number) {
    this.movieService.removeMovie(id).subscribe(
      () => {
        this.movies = this.movies.filter(movie => movie.id !== id);
      },
      error => {
        console.error('Error removing movie:', error);
      }
    );
  }
  removeMovieByName(movie: Movie) {
    // Use removeMovieByName assuming title is a unique identifier
    this.movieService.removeMovieByName(movie.title).subscribe(
      () => {
        this.movies = this.movies.filter(m => m.title !== movie.title);
      },
      error => {
        console.error('Error removing movie:', error);
      }
    );
  }

  resetNewMovie() {
    this.newMovie = {
      title: '',
      genre: '',
      director: '',
      duration: 0,
      rating: 0
    };
    this.showAddMovieForm = false;
  }
}
