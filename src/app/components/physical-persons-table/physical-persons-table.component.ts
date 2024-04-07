import {Component, inject} from '@angular/core';
import {LoadingService} from "../../loading.service";
import {ApiService} from "../../api.service";
import {take} from "rxjs";
import {HeadingComponent} from "../heading/heading.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ButtonComponent} from "../button/button.component";
import {FormsModule} from "@angular/forms";
import {CheckboxComponent} from "../checkbox/checkbox.component";
import {LoadingSpinnerComponent} from "../loading-spinner/loading-spinner.component";
import {PhysicalPerson} from "../../PhysicalPerson";

@Component({
  selector: 'mmz-physical-persons-table',
  standalone: true,
  imports: [
    HeadingComponent,
    AsyncPipe,
    RouterLink,
    ButtonComponent,
    FormsModule,
    CheckboxComponent,
    LoadingSpinnerComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './physical-persons-table.component.html',
  styleUrl: './physical-persons-table.component.scss'
})
export class PhysicalPersonsTableComponent {
  private loadingService = inject(LoadingService);
  protected isLoading$ = this.loadingService.loading$;
  protected readonly Date = Date;
  protected data: PhysicalPerson[] = [];

  constructor(private apiService: ApiService) {
    this.loadingService.show();
    this.loadData();
  }

  get currentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  private loadData() {
    this.apiService.getPhysicalPersons().subscribe(datas => {
      this.data = datas;
      this.loadingService.hide();
    })
  }

  protected updatePerson(id: number, person: PhysicalPerson) {
    this.apiService.updatePhysicalPerson(id, person)
      .pipe(take(1))
      .subscribe((value: any) => {
        if (value.message !== 'Person updated successfully!') {
          console.warn('Some fields are empty!');
          console.warn(value);
        }
      })
  }

  protected deletePerson(id: number) {
    this.apiService.deletePhysicalPerson(id)
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
