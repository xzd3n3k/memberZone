import { Routes } from '@angular/router';
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {'path': '', component: MainMenuComponent},
  {'path': 'login', component: LoginComponent}
];
