import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  constructor(private router:Router) { }


  confirmLogout() {
    const isConfirmed = window.confirm('Are you sure you want to log out?');

    if (isConfirmed) {
      
      this.router.navigate(['/']);
    }
}


}
