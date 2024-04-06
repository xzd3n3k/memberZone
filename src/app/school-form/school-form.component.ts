import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {School} from "../School";
import {TextInputComponent} from "../components/text-input/text-input.component";
import {HeadingComponent} from "../components/heading/heading.component";
import {FormFieldComponent} from "../components/form-field/form-field.component";
import {CheckboxComponent} from "../components/checkbox/checkbox.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "../api.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ButtonComponent} from "../components/button/button.component";
import {take} from "rxjs";
import {Location} from "@angular/common";

@Component({
  selector: 'mmz-school-form',
  standalone: true,
  imports: [
    TextInputComponent,
    HeadingComponent,
    FormFieldComponent,
    CheckboxComponent,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './school-form.component.html',
  styleUrl: './school-form.component.css'
})
export class SchoolFormComponent implements OnInit {

  protected locationService = inject(Location);
  private destroyRef = inject(DestroyRef);
  private apiService: ApiService = inject(ApiService);

  buttonText!: string;
  id?: number;
  selected?: School;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.selected = {
      registration_number: '',
      name: '',
      principal: '',
      phone: '',
      street: '',
      zip_code: '',
      post_code: '',
      city: '',
      country: '',
      province: '',
      email: '',
      active: false,
      payed: false
    }

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.id) {
      this.buttonText = 'Vytvořit';
    } else {
      this.apiService.getSchool(this.id)
        .pipe(take(1))
        .subscribe(school => {
          this.selected = school;
        })
      this.buttonText = 'Uložit';
    }
  }

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('id');
    // this.selected = this.data.find(school => school.registration_number === this.id)!;
  }

  protected onFormSubmit() {
    // TODO xzd3n3k someday make csrf work
    // this.apiService.getToken().pipe(take(1)).subscribe((token: string) => {
    //   this.apiService.createSchool(this.selected!).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => console.log(value));
    // });

    if (!this.id) {
      this.apiService.createSchool(this.selected!)
        .pipe(take(1))
        .subscribe(value => {
          if (value.message !== 'School created successfully!') {
            console.warn('Some fields are empty!'); // TODO xzd3n3k toasts
          } else {
            this.router.navigateByUrl('/');
          }
        });
    } else {
      this.apiService.updateSchool(this.id, this.selected!)
        .pipe(take(1))
        .subscribe((value: any) => {
          if (value.message !== 'School update successfully!') {
            console.warn('Some fields are empty!');
            console.warn(value);
          } else {
            this.router.navigateByUrl('/');
          }
        })
    }
  }
}
