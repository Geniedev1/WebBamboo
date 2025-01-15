import { Component, OnInit } from '@angular/core';
import { Theatre } from 'src/app/models/Theatre'; // Make sure to import the Theatre model
import { TheatreService } from 'src/app/services/theatre.service'; // Make sure to import the TheatreService

@Component({
  selector: 'app-admin-theatres',
  templateUrl: './admin-theatres.component.html',
  styleUrls: ['./admin-theatres.component.css']
})
export class AdminTheatresComponent implements OnInit {

  theatres: Theatre[] = [];
  showAddTheatreForm = false;
  newTheatre: Theatre = {
    name: '',
    location: '',
    numberOfRows: 0,
    numberOfColumns: 0
    // Add other properties as needed
  };

  constructor(private theatreService: TheatreService) { }

  ngOnInit() {
    this.getAllTheatres();
  }

  getAllTheatres() {
    this.theatreService.getAllTheatres().subscribe(
      (theatres: Theatre[]) => {
        this.theatres = theatres;
      },
      error => {
        console.error('Error fetching theatres:', error);
      }
    );
  }

  addTheatre() {
    if (this.newTheatre.name.trim() !== '') {
      this.theatreService.addTheatre(this.newTheatre).subscribe(
        (addedTheatre: Theatre) => {
          this.theatres.push(addedTheatre);
          this.resetNewTheatre();
        },
        error => {
          console.error('Error adding theatre:', error);
        }
      );
    }
  }

  removeTheatreByName(name: string) {
    this.theatreService.removeTheatreByName(name).subscribe(
      () => {
        this.theatres = this.theatres.filter(theatre => theatre.name !== name);
      },
      error => {
        console.error('Error removing theatre:', error);
      }
    );
  }

  resetNewTheatre() {
    this.newTheatre = {
      name: '',
      location: '',
      numberOfRows: 0,
      numberOfColumns: 0
      // Reset other properties as needed
    };
    this.showAddTheatreForm = false;
  }
}
