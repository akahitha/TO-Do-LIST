// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';  // Store username input
  password: string = '';  // Store password input

  constructor(private router: Router) {}

  navigateToTasks() {
    if (this.username && this.password) {
      this.router.navigate(['/tasks']);  // Navigates to To-Do List Page
    } else {
      alert("Please enter username and password!");
    }
  }
}
