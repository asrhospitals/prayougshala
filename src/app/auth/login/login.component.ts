import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword: boolean = true;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Define users and their roles
      const userRoles: { [key: string]: { password: string, role: string } } = {
        "admin": { password: "admin", role: "admin" },
        "doctor": { password: "doctor123", role: "doctor" },
        "labtech": { password: "lab123", role: "lab-technician" }
      };

      if (userRoles[username] && userRoles[username].password === password) {
        const role = userRoles[username].role;

        console.log(`Login Successful: ${username} (${role})`);
        this.toastr.success('Login Successful!', 'Success');

        // Store role in localStorage for session persistence
        localStorage.setItem('userRole', role);

        // Redirect based on role
        const redirectPath = this.getRedirectPath(role);
        this.router.navigate([redirectPath]);
      } else {
        this.toastr.error('Invalid username or password', 'Login Failed');
      }
    } else {
      this.toastr.warning('Please enter username and password', 'Validation');
    }
  }

  // Function to determine redirect path based on role
  getRedirectPath(role: string): string {
    switch (role) {
      case "admin":
        return "/app/home";
      case "doctor":
        return "/app/ehr/patient-registration";
      case "lab-technician":
        return "/app/lab/order-dashboard";
      default:
        return "/login"; // Fallback case
    }
  }


  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
