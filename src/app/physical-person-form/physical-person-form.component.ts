import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ApiService} from "../api.service";
import {JuridicalPerson} from "../JuridicalPerson";
import {ActivatedRoute, Router} from "@angular/router";
import {take} from "rxjs";
import {ButtonComponent} from "../components/button/button.component";
import {CheckboxComponent} from "../components/checkbox/checkbox.component";
import {FormFieldComponent} from "../components/form-field/form-field.component";
import {HeadingComponent} from "../components/heading/heading.component";
import {TextInputComponent} from "../components/text-input/text-input.component";
import {FormsModule} from "@angular/forms";
import {PhysicalPerson} from "../PhysicalPerson";

@Component({
  selector: 'mmz-physical-person-form',
  standalone: true,
  imports: [
    ButtonComponent,
    CheckboxComponent,
    FormFieldComponent,
    HeadingComponent,
    TextInputComponent,
    FormsModule
  ],
  templateUrl: './physical-person-form.component.html',
  styleUrl: './physical-person-form.component.scss'
})
export class PhysicalPersonFormComponent implements OnInit {

  protected locationService = inject(Location);
  private destroyRef = inject(DestroyRef);
  private apiService: ApiService = inject(ApiService);

  buttonText!: string;
  id?: number;
  selected?: PhysicalPerson;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.selected = {
      registration_number: '',
      street: '',
      zip_code: '',
      post_code: '',
      city: '',
      country: '',
      province: '',
      email: '',
      phone: '',
      active: false,
      payed: false,
      ico: '',
      first_name: '',
      last_name: '',
      subject_of_business: '',
      ares: '',
      title: '',
    }

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.id) {
      this.buttonText = 'Vytvořit';
    } else {
      this.apiService.getPhysicalPerson(this.id)
        .pipe(take(1))
        .subscribe(person => {
          this.selected = person;
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
      this.apiService.createPhysicalPerson(this.selected!)
        .pipe(take(1))
        .subscribe(value => {
          if (value.message !== 'Person created successfully!') {
            console.warn('Some fields are empty!'); // TODO xzd3n3k toasts
          } else {
            this.router.navigateByUrl('/');
          }
        });
    } else {
      this.apiService.updatePhysicalPerson(this.id, this.selected!)
        .pipe(take(1))
        .subscribe((value: any) => {
          if (value.message !== 'Person updated successfully!') {
            console.warn('Some fields are empty!');
            console.warn(value);
          } else {
            this.router.navigateByUrl('/');
          }
        })
    }
  }
}

