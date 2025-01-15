import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theatre } from '../models/Theatre';

@Injectable({
  providedIn: 'root',
})
export class TheatreService {
  private apiUrl = 'http://localhost:8585/api/theatres';

  constructor(private http: HttpClient) {}

  addTheatre(theatre: Theatre): Observable<Theatre> {
    return this.http.post<Theatre>(`${this.apiUrl}/addTheatre`, theatre);
  }

  getAllTheatres(): Observable<Theatre[]> {
    return this.http.get<Theatre[]>(`${this.apiUrl}/getAllTheatres`);
  }

  removeTheatreById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/removeTheatre/${id}`);
  }

  removeTheatreByName(name: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/removeByName/${name}`);
  }

  
  getTheatreByName(name: string): Observable<Theatre> {
    const url = `${this.apiUrl}/getTheatreByName/${name}`;
    return this.http.get<Theatre>(url);
  }
}
