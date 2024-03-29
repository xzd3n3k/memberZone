import { Component } from '@angular/core';
import {School} from "../../School";
import {DatePipe, NgForOf} from "@angular/common";
import {HeadingComponent} from "../heading/heading.component";
import {CheckboxComponent} from "../checkbox/checkbox.component";
import {ButtonComponent} from "../button/button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'mmz-schools-table',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    HeadingComponent,
    CheckboxComponent,
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './schools-table.component.html',
  styleUrl: './schools-table.component.scss'
})
export class SchoolsTableComponent {

  protected readonly Date = Date;

  get currentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  data: School[] = [];
  // data: School[] = [
  //   {
  //     registration_number: '123/24',
  //     name: 'stredni neco skola',
  //     principal: 'baba jaga',
  //     phone: '123 456 789',
  //     address: 'nekde doma kde se vola',
  //     province: 'jihostredomoravsky',
  //     email: 'redilka@skoly.eu',
  //     active: true,
  //     payed: true
  //   },
  //   {
  //     registration_number: '122/24',
  //     name: 'stredni neco prvni',
  //     principal: 'baba jaga',
  //     phone: '123 456 789',
  //     address: 'nekde doma kde se vola',
  //     province: 'jihostredomoravsky',
  //     email: 'redilka@skoly.eu',
  //     active: false,
  //     payed: true
  //   },
  //   {
  //     registration_number: '113/24',
  //     name: 'stredni druha skola',
  //     principal: 'baba jaga',
  //     phone: '123 456 789',
  //     address: 'nekde doma kde se vola',
  //     province: 'jihostredomoravsky',
  //     email: 'redilka@skoly.eu',
  //     active: true,
  //     payed: true
  //   },
  //   {
  //     registration_number: '143/24',
  //     name: 'stredni vysoka skola',
  //     principal: 'baba jaga',
  //     phone: '123 456 789',
  //     address: 'nekde doma kde se vola',
  //     province: 'jihostredomoravsky',
  //     email: 'redilka@skoly.eu',
  //     active: true,
  //     payed: true
  //   },
  //   {
  //     registration_number: '183/24',
  //     name: 'stredni nizka skola',
  //     principal: 'baba jaga',
  //     phone: '123 456 789',
  //     address: 'nekde doma kde se vola',
  //     province: 'jihostredomoravsky',
  //     email: 'redilka@skoly.eu',
  //     active: true,
  //     payed: true
  //   }
  // ];
}
