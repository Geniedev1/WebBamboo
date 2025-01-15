import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  username: string = '';
  password: string = '';
  forgotPasswordEmail: string = '';
  showForgotPassword: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    this.userService.authenticateUser(this.username, this.password).subscribe(
      (user) => {
        console.log('Login successful!', user);
        alert("Login Successful");
        this.router.navigate(['/user-home', user.id]);
      },
      (error) => {
        console.error('Login failed!', error);
      }
    );
  }

  showForgotPasswordForm(event: Event): void {
    event.preventDefault();
    this.showForgotPassword = true;
  }

  forgotPassword(): void {
    this.userService.forgotPassword(this.forgotPasswordEmail).subscribe(
      () => {
        alert('Password reset email sent');
      },
      (error) => {
        console.error('Error sending password reset email', error);
      }
    );
  }
}