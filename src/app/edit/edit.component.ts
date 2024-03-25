import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {School} from "../School";
import {TextInputComponent} from "../components/text-input/text-input.component";
import {HeadingComponent} from "../components/heading/heading.component";

@Component({
  selector: 'mmz-edit',
  standalone: true,
  imports: [
    TextInputComponent,
    HeadingComponent
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  id?: string | null;
  selected?: School;
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
      registration_number: '122/24',
      name: 'stredni neco skola',
      principal: 'baba jaga',
      phone: '123 456 789',
      address: 'nekde doma kde se vola',
      province: 'jihostredomoravsky',
      email: 'redilka@skoly.eu',
      active: false,
      payed: true
    },
    {
      registration_number: '113/24',
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
      registration_number: '143/24',
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
      registration_number: '183/24',
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
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.selected = this.data.find(school => school.registration_number === this.id)!;
  }
}
