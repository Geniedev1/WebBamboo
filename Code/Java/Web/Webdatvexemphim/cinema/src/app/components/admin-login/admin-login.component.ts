import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  loginMessage: string = '';

  constructor(private adminService: AdminService, private router: Router) {}

  login(): void {
    this.adminService.verifyAdminCredentials(this.username, this.password).subscribe(
      () => {
        // Redirect to the admin home component upon successful login
        this.router.navigate(['/admin-home']);
      },
      (error) => {
        this.loginMessage = 'Invalid credentials. Login failed.';
      }
    );
  }
}
