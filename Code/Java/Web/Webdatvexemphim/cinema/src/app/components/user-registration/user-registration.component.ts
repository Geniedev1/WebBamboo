// user-registration.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  user: User = { username: '', email: '', password: '' };

  constructor(private userService: UserService, private router: Router) {}

  registerUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => {
        console.log('User registration successful!', response);
        this.router.navigate(['/user-login']);
      },
      (error) => {
        console.error('User registration failed!', error);
        // Handle the error, e.g., display an error message to the user
      }
    );
  }
}
