// user-home.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  user: User | undefined;

  constructor(private router:Router,private route: ActivatedRoute,private userService:UserService) {}

  ngOnInit(): void {
    // Retrieve user ID from route parameters
    this.route.params.subscribe((params) => {
      const userId = +params['id'];
      this.userService.getUserById(userId).subscribe((user) => {
        this.user = user;
        console.log('User in UserHome:', this.user);
      });
    });
  
  }
  confirmLogout() {
    const isConfirmed = window.confirm('Are you sure you want to log out?');

    if (isConfirmed) {
      
      this.router.navigate(['/']);
    }
}
  }