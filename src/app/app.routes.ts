import { Routes } from '@angular/router';
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {LoginComponent} from "./login/login.component";
import {SchoolFormComponent} from "./edit/school-form.component";

export const routes: Routes = [
  {'path': '', redirectTo: '/home', pathMatch: 'full'},
  {'path': 'home', component: MainMenuComponent},
  {'path': 'new', component: SchoolFormComponent},
  {'path': 'edit/:id', component: SchoolFormComponent},
  {'path': 'login', component: LoginComponent},
];
