import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {CheckboxComponent} from "../checkbox/checkbox.component";
import {HeadingComponent} from "../heading/heading.component";
import {NgForOf, NgIf} from "@angular/common";
import {ApiService} from "../../api.service";
import {take} from "rxjs";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {JuridicalPerson} from "../../JuridicalPerson";

@Component({
  selector: 'mmz-juridical-persons-table',
  standalone: true,
  imports: [
    ButtonComponent,
    CheckboxComponent,
    HeadingComponent,
    NgForOf,
    NgIf,
    RouterLink,
    FormsModule
  ],
  templateUrl: './juridical-persons-table.component.html',
  styleUrl: './juridical-persons-table.component.scss'
})
export class JuridicalPersonsTableComponent {
  protected readonly Date = Date;
  protected data: JuridicalPerson[] = [];

  constructor(private apiService: ApiService) {
    this.loadData();
  }

  get currentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  private loadData() {
    this.apiService.getJuridicalPersons().subscribe(datas => {
      this.data = datas;
    })
  }

  protected updatePerson(id: number, person: JuridicalPerson) {
    this.apiService.updateJuridicalPerson(id, person)
      .pipe(take(1))
      .subscribe((value: any) => {
        if (value.message !== 'Person updated successfully!') {
          console.warn('Some fields are empty!');
          console.warn(value);
        }
      })
  }

  protected deletePerson(id: number) {
    this.apiService.deleteJuridicalPerson(id)
      .pipe(take(1))
      .subscribe((value: any) => {
        if (value.message !== 'Person has been successfully deleted!') {
          console.log(value);
        } else {
          this.loadData();
        }
      })
  }
}
