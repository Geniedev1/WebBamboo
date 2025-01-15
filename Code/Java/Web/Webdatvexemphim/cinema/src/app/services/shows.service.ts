// show.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../models/Show'; // Make sure to import the correct path for your Show model

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  
  private apiUrl = 'http://localhost:8585/api/shows';

  constructor(private http: HttpClient) {}

  addShow(show: Show): Observable<Show> {
    return this.http.post<Show>(this.apiUrl, show);
  }

  getAllShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.apiUrl);
  }

  removeShowById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAllShowsByMovieName(movieName: string): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.apiUrl}/byMovie/${movieName}`);
  }

  getShowById(id: number): Observable<Show> {
    const url = `${this.apiUrl}/getShowById/${id}`;
    return this.http.get<Show>(url);
  }
  // Other methods for updating shows, retrieving shows by ID, etc.
}
