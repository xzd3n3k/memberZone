import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ButtonComponent} from "../components/button/button.component";
import {CheckboxComponent} from "../components/checkbox/checkbox.component";
import {FormFieldComponent} from "../components/form-field/form-field.component";
import {HeadingComponent} from "../components/heading/heading.component";
import {TextInputComponent} from "../components/text-input/text-input.component";
import {ApiService} from "../api.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {take} from "rxjs";
import {JuridicalPerson} from "../JuridicalPerson";
import {FormsModule} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'mmz-juridical-person-form',
  standalone: true,
  imports: [
    ButtonComponent,
    CheckboxComponent,
    FormFieldComponent,
    HeadingComponent,
    TextInputComponent,
    FormsModule,
    RouterLink
  ],
  templateUrl: './juridical-person-form.component.html',
  styleUrl: './juridical-person-form.component.scss'
})
export class JuridicalPersonFormComponent implements OnInit {

  protected locationService = inject(Location);
  private destroyRef = inject(DestroyRef);
  private apiService: ApiService = inject(ApiService);

  buttonText!: string;
  id?: number;
  selected?: JuridicalPerson;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.selected = {
      registration_number: '',
      company: '',
      street: '',
      zip_code: '',
      post_code: '',
      city: '',
      country: '',
      province: '',
      email: '',
      contact_person: '',
      phone: '',
      active: false,
      payed: false,
      ico: '',
    }

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.id) {
      this.buttonText = 'Vytvořit';
    } else {
      this.apiService.getJuridicalPerson(this.id)
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
      this.apiService.createJuridicalPerson(this.selected!)
        .pipe(take(1))
        .subscribe(value => {
          if (value.message !== 'Person created successfully!') {
            console.warn('Some fields are empty!'); // TODO xzd3n3k toasts
          } else {
            this.router.navigateByUrl('/');
          }
        });
    } else {
      this.apiService.updateJuridicalPerson(this.id, this.selected!)
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
