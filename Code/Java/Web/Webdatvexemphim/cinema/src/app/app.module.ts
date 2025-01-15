import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminMoviesComponent } from './components/admin-movies/admin-movies.component';
import { AdminTheatresComponent } from './components/admin-theatres/admin-theatres.component';
import { AdminShowsComponent } from './components/admin-shows/admin-shows.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserMoviesComponent } from './components/user-movies/user-movies.component';
import { UserTheatresComponent } from './components/user-theatres/user-theatres.component';
import { UserBookingsComponent } from './components/user-bookings/user-bookings.component';
import { SeatBookComponent } from './components/seat-book/seat-book.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    AdminHomeComponent,
    AdminMoviesComponent,
    AdminTheatresComponent,
    AdminShowsComponent,
    UserHomeComponent,
    UserMoviesComponent,
    UserTheatresComponent,
    UserBookingsComponent,
    SeatBookComponent,
    HeaderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
