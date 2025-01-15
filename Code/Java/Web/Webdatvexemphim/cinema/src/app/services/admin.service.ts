import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  private baseUrl = 'http://localhost:8585/api/admins'; // Replace with your actual backend URL

  constructor(private httpClient: HttpClient) {}

  verifyAdminCredentials(username: string, password: string): Observable<string> {
    const url = `${this.baseUrl}/verify/${username}/${password}`;

    return this.httpClient.get(url, { responseType: 'text' }).pipe(
      tap(response => console.log('Response from verifyAdminCredentials:', response)),
      catchError(error => {
        console.error('Error in verifyAdminCredentials:', error);
        throw error;
      })
    );
  }
}
