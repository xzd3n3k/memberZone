import { Routes } from '@angular/router';
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {LoginComponent} from "./login/login.component";
import {EditComponent} from "./edit/edit.component";

export const routes: Routes = [
  {'path': '', redirectTo: '/home', pathMatch: 'full'},
  {'path': 'home', component: MainMenuComponent},
  {'path': 'new', component: EditComponent},
  {'path': 'edit/:id', component: EditComponent},
  {'path': 'login', component: LoginComponent},
];
