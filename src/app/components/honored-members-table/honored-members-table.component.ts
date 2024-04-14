import {Component, inject} from '@angular/core';
import {LoadingService} from "../../loading.service";
import {ApiService} from "../../api.service";
import {take} from "rxjs";
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgIf} from "@angular/common";
import {LoadingSpinnerComponent} from "../loading-spinner/loading-spinner.component";
import {ButtonComponent} from "../button/button.component";
import {RouterLink} from "@angular/router";
import {CheckboxComponent} from "../checkbox/checkbox.component";
import {HeadingComponent} from "../heading/heading.component";
import {HonoredMember} from "../../HonoredMember";

@Component({
  selector: 'mmz-honored-members-table',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    LoadingSpinnerComponent,
    NgIf,
    ButtonComponent,
    RouterLink,
    CheckboxComponent,
    HeadingComponent
  ],
  templateUrl: './honored-members-table.component.html',
  styleUrl: './honored-members-table.component.scss'
})
export class HonoredMembersTableComponent {
  private loadingService = inject(LoadingService);
  protected isLoading$ = this.loadingService.loading$;
  protected readonly Date = Date;
  protected data: HonoredMember[] = [];

  constructor(private apiService: ApiService) {
    this.loadingService.show();
    this.loadData();
  }

  get currentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  private loadData() {
    this.apiService.getHonoredMembers().subscribe(datas => {
      this.data = datas;
      this.loadingService.hide();
    })
  }

  protected updateMember(id: number, person: HonoredMember) {
    this.apiService.updateHonoredMember(id, person)
      .pipe(take(1))
      .subscribe((value: any) => {
        if (value.message !== 'Person updated successfully!') {
          console.warn('Some fields are empty!');
          console.warn(value);
        }
      })
  }

  protected deleteMember(id: number) {
    this.apiService.deleteHonoredMember(id)
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
