import { Component } from '@angular/core';
import {SchoolsTableComponent} from "../components/schools-table/schools-table.component";
import TabsComponent from "../components/tabs/tabs.component";
import TabComponent from "../components/tabs/tab.component";
import {JuridicalPersonsTableComponent} from "../components/juridical-persons-table/juridical-persons-table.component";
import {SidenavComponent} from "../components/sidenav/sidenav.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'mmz-main-menu',
  standalone: true,
  imports: [
    SchoolsTableComponent,
    TabsComponent,
    TabComponent,
    JuridicalPersonsTableComponent,
    SidenavComponent,
    RouterOutlet
  ],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

}
