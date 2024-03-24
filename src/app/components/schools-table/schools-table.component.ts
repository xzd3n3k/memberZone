import { Component } from '@angular/core';
import {School} from "../../School";
import {DatePipe, NgForOf} from "@angular/common";
import {HeadingComponent} from "../heading/heading.component";
import {CheckboxComponent} from "../checkbox/checkbox.component";

@Component({
  selector: 'mmz-schools-table',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    HeadingComponent,
    CheckboxComponent
  ],
  templateUrl: './schools-table.component.html',
  styleUrl: './schools-table.component.css'
})
export class SchoolsTableComponent {

  protected readonly Date = Date;

  get currentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  data: School[] = [
    {
      registration_number: '123/24',
      name: 'stredni neco skola',
      principal: 'baba jaga',
      phone: '123 456 789',
      address: 'nekde doma kde se vola',
      province: 'jihostredomoravsky',
      email: 'redilka@skoly.eu',
      active: true,
      payed: true
    },
    {
      registration_number: '123/24',
      name: 'stredni neco skola',
      principal: 'baba jaga',
      phone: '123 456 789',
      address: 'nekde doma kde se vola',
      province: 'jihostredomoravsky',
      email: 'redilka@skoly.eu',
      active: true,
      payed: true
    },
    {
      registration_number: '123/24',
      name: 'stredni neco skola',
      principal: 'baba jaga',
      phone: '123 456 789',
      address: 'nekde doma kde se vola',
      province: 'jihostredomoravsky',
      email: 'redilka@skoly.eu',
      active: true,
      payed: true
    },
    {
      registration_number: '123/24',
      name: 'stredni neco skola',
      principal: 'baba jaga',
      phone: '123 456 789',
      address: 'nekde doma kde se vola',
      province: 'jihostredomoravsky',
      email: 'redilka@skoly.eu',
      active: true,
      payed: true
    },
    {
      registration_number: '123/24',
      name: 'stredni neco skola',
      principal: 'baba jaga',
      phone: '123 456 789',
      address: 'nekde doma kde se vola',
      province: 'jihostredomoravsky',
      email: 'redilka@skoly.eu',
      active: true,
      payed: true
    }
  ];
}
