import {Component, inject} from '@angular/core';
import {School} from "../../School";
import {AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {HeadingComponent} from "../heading/heading.component";
import {CheckboxComponent} from "../checkbox/checkbox.component";
import {ButtonComponent} from "../button/button.component";
import {RouterLink} from "@angular/router";
import {ApiService} from "../../api.service";
import {take} from "rxjs";
import {FormsModule} from "@angular/forms";
import {LoadingSpinnerComponent} from "../loading-spinner/loading-spinner.component";
import {LoadingService} from "../../loading.service";

@Component({
  selector: 'mmz-schools-table',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    HeadingComponent,
    CheckboxComponent,
    ButtonComponent,
    RouterLink,
    FormsModule,
    NgIf,
    AsyncPipe,
    LoadingSpinnerComponent
  ],
  templateUrl: './schools-table.component.html',
  styleUrl: './schools-table.component.scss'
})
export class SchoolsTableComponent {

  private loadingService = inject(LoadingService);
  protected isLoading$ = this.loadingService.loading$;
  protected readonly Date = Date;
  protected data: School[] = [];

  constructor(private apiService: ApiService) {
    this.loadingService.show();
    this.loadData();
  }

  get currentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  private loadData() {
    this.apiService.getSchools().subscribe(datas => {
      this.data = datas;
      this.loadingService.hide();
    })
  }

  protected updateSchool(id: number, school: School) {
    this.apiService.updateSchool(id, school)
      .pipe(take(1))
      .subscribe((value: any) => {
        if (value.message !== 'School update successfully!') {
          console.warn('Some fields are empty!');
          console.warn(value);
        }
      })
  }

  protected deleteSchool(id: number) {
    this.apiService.deleteSchool(id)
      .pipe(take(1))
      .subscribe((value: any) => {
        if (value.message !== 'School has been successfully deleted!') {
          console.log(value);
        } else {
          this.loadData();
        }
      })
  }
}
