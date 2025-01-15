// user-theatres.component.ts

import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/Show';
import { Theatre } from 'src/app/models/Theatre';
import { ShowService } from 'src/app/services/shows.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { TheatreService } from 'src/app/services/theatre.service';

@Component({
  selector: 'app-user-theatres',
  templateUrl: './user-theatres.component.html',
  styleUrls: ['./user-theatres.component.css'],
})
export class UserTheatresComponent implements OnInit {
  shows: Show[] = [];
  theatres: Theatre[] = [];
  filteredTheatres: Theatre[] = [];
  showVisible: boolean = false;
  user: User | undefined;
  uid: number = 0;
  theatreSearch: string = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private showService: ShowService,
    private theatreService: TheatreService
  ) {}

  ngOnInit(): void {
    this.showService.getAllShows().subscribe((shows) => {
      this.shows = shows;

      this.theatreService.getAllTheatres().subscribe((theatres) => {
        const uniqueTheatreNames = Array.from(new Set(this.shows.map((show) => show.theatreName)));

        this.loadTheatreDetails(theatres, uniqueTheatreNames);

        this.route.parent?.params.subscribe((params) => {
          this.uid = +params['id'];

          this.userService.getUserById(this.uid).subscribe(
            (user) => {
              this.user = user;
            },
            (error) => {
              console.error('Error fetching user details:', error);
            }
          );
        });
      });
    });

    this.theatreService.getAllTheatres().subscribe((theatres) => {
      this.filteredTheatres = this.theatres;
    });
  }

  loadTheatreDetails(allTheatres: Theatre[], uniqueTheatreNames: string[]): void {
    uniqueTheatreNames.forEach((theatreName) => {
      const theatre = allTheatres.find((t) => t.name === theatreName);
      if (theatre) {
        this.theatres.push(theatre);
      }
    });
  }

  getShowsForTheatre(theatre: Theatre): Show[] {
    return this.shows.filter((show) => show.theatreName === theatre.name);
  }

  toggleShowsVisibility(theatre: Theatre): void {
    theatre.showVisible = !theatre.showVisible;
  }

  bookTicket(showId: number): void {
    this.router.navigate(['user-home', this.uid, 'seat-book', showId]);
  }

  filterTheatres(): void {
    this.filteredTheatres = this.theatres.filter((theatre) =>
      theatre.name.toLowerCase().includes(this.theatreSearch.toLowerCase())
    );
  }
  clearSearch(): void {
    this.theatreSearch = '';
    this.filteredTheatres = this.theatres;
  }
}
