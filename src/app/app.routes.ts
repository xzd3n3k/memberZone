import { Routes } from '@angular/router';
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {LoginComponent} from "./login/login.component";
import {SchoolFormComponent} from "./school-form/school-form.component";

export const routes: Routes = [
  {'path': '', redirectTo: '/home', pathMatch: 'full'},
  {'path': 'home', component: MainMenuComponent},
  {'path': 'school-form', component: SchoolFormComponent},
  {'path': 'school-form/:id', component: SchoolFormComponent},
  {'path': 'juridical-person-form', component: SchoolFormComponent}, // TODO use proper component
  {'path': 'juridical-person-form/:id', component: SchoolFormComponent}, // TODO use proper component

  {'path': 'login', component: LoginComponent},
];
