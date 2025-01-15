// movie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  
  private apiUrl = 'http://localhost:8585/api/movies';

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/getAllMovies`);
  }

  
  getMovieByName(name: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/getMovieByName/${name}`);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.apiUrl}/addMovie`, movie);
  }

  removeMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  removeMovieByName(name: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/removeByName/${name}`);
  }

}
