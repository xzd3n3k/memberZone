import { Component } from '@angular/core';
import {SchoolsTableComponent} from "../components/schools-table/schools-table.component";
import TabsComponent from "../components/tabs/tabs.component";
import TabComponent from "../components/tabs/tab.component";

@Component({
  selector: 'mmz-main-menu',
  standalone: true,
  imports: [
    SchoolsTableComponent,
    TabsComponent,
    TabComponent
  ],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

}
