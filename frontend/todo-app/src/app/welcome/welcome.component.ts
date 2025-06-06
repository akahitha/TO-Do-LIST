// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-welcome',
//   templateUrl: './welcome.component.html',
//   styleUrls: ['./welcome.component.css']
// })
// export class WelcomeComponent {

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    console.log("Navigating to Login Page...");
    this.router.navigate(['/login']); // Redirects to login page
  }
}
