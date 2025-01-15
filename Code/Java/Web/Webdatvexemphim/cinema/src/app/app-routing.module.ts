import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { HomeComponent } from './components/home/home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminMoviesComponent } from './components/admin-movies/admin-movies.component';
import { AdminTheatresComponent } from './components/admin-theatres/admin-theatres.component';
import { AdminShowsComponent } from './components/admin-shows/admin-shows.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserMoviesComponent } from './components/user-movies/user-movies.component';
import { UserBookingsComponent } from './components/user-bookings/user-bookings.component';
import { UserTheatresComponent } from './components/user-theatres/user-theatres.component';
import { SeatBookComponent } from './components/seat-book/seat-book.component';

const routes: Routes = [
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: '', component: HomeComponent },
  { path: 'admin-home', component: AdminHomeComponent,

  children:[

    { path: '', redirectTo: 'admin-movies', pathMatch: 'full' },
    {path:'admin-movies',component:AdminMoviesComponent},
    {path:'admin-theatres',component:AdminTheatresComponent},
    {path:'admin-shows',component:AdminShowsComponent}
  ]
},
{
  path: 'user-home/:id',
  component: UserHomeComponent,
  children: [
    {path:'',redirectTo:'user-movies',pathMatch:'full'},
    { path: 'user-movies', component: UserMoviesComponent },
    { path: 'user-theatres', component: UserTheatresComponent },
    { path: 'user-bookings', component: UserBookingsComponent },
    { path: 'seat-book/:showId', component: SeatBookComponent },
    
  ],  
},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
