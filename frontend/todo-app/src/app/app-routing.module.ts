import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },  // Redirect to Welcome Page
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },  // Default route
  { path: 'tasks', component: TaskComponent } // To-Do List page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
