import { Routes } from '@angular/router';
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {LoginComponent} from "./login/login.component";
import {SchoolFormComponent} from "./school-form/school-form.component";
import {JuridicalPersonFormComponent} from "./juridical-person-form/juridical-person-form.component";
import {PhysicalPersonFormComponent} from "./physical-person-form/physical-person-form.component";

export const routes: Routes = [
  {'path': '', redirectTo: '/home', pathMatch: 'full'},
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
      {
        path: 'physical-persons',
        loadChildren: () => import('./components/physical-persons-table/physical-persons-table.routes')
          .then(r => r.routes)
      },
      {
        path: 'honored-members',
        loadChildren: () => import('./components/honored-members-table/honored-members-table.routes')
          .then(r => r.routes)
      }
    ]
  },
  {'path': 'school-form', component: SchoolFormComponent},
  {'path': 'school-form/:id', component: SchoolFormComponent},
  {'path': 'juridical-person-form', component: JuridicalPersonFormComponent},
  {'path': 'juridical-person-form/:id', component: JuridicalPersonFormComponent},
  {'path': 'physical-person-form', component: PhysicalPersonFormComponent},
  {'path': 'physical-person-form/:id', component: PhysicalPersonFormComponent},

  {'path': 'login', component: LoginComponent},
];
