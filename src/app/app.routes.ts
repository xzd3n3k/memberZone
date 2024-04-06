import { Routes } from '@angular/router';
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {LoginComponent} from "./login/login.component";
import {SchoolFormComponent} from "./school-form/school-form.component";
import {JuridicalPersonFormComponent} from "./juridical-person-form/juridical-person-form.component";

export const routes: Routes = [
  {'path': '', redirectTo: '/home', pathMatch: 'full'},
  {
    'path': 'schools',
    loadChildren: () => import('./components/schools-table/schools-table.routes')
      .then(r => r.routes)
  },
  {
    path: 'juridical-persons',
    loadChildren: () => import('./components/juridical-persons-table/juridical-persons-table.routes')
      .then(r => r.routes)
  },
  {
    'path': 'home',
    component: MainMenuComponent,
    children:[
      {
        'path': 'schools',
        loadChildren: () => import('./components/schools-table/schools-table.routes')
          .then(r => r.routes)
      },
      {
        path: 'juridical-persons',
        loadChildren: () => import('./components/juridical-persons-table/juridical-persons-table.routes')
          .then(r => r.routes)
      },
    ]
  },
  {'path': 'school-form', component: SchoolFormComponent},
  {'path': 'school-form/:id', component: SchoolFormComponent},
  {'path': 'juridical-person-form', component: JuridicalPersonFormComponent},
  {'path': 'juridical-person-form/:id', component: JuridicalPersonFormComponent},

  {'path': 'login', component: LoginComponent},
];
