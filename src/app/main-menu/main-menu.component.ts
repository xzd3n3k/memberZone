import { Component } from '@angular/core';
import {SchoolsTableComponent} from "../components/schools-table/schools-table.component";

@Component({
  selector: 'mmz-main-menu',
  standalone: true,
  imports: [
    SchoolsTableComponent
  ],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

}
