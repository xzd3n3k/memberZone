import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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

@Component({
  selector: 'mmz-edit',
  standalone: true,
  imports: [
    TextInputComponent,
    HeadingComponent,
    FormFieldComponent,
    CheckboxComponent,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private apiService: ApiService = inject(ApiService);

  buttonText!: string;
  id?: string | null;
  selected?: School;
  schoolForm = new FormGroup({
    registrationNumber: new FormControl(),
    name: new FormControl(),
    principal: new FormControl(),
    phone: new FormControl(),
  });

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) {
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

      this.buttonText = 'Vytvořit';
    } else {
      // this.selected = this.data.find(school => school.registration_number === this.id)!;
      this.buttonText = 'Uložit';
    }
  }

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('id');
    // this.selected = this.data.find(school => school.registration_number === this.id)!;
    this.apiService.getTest().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => console.log(value));
  }

  protected onFormSubmit() {
    // TODO xzd3n3k someday make csrf work
    // this.apiService.getToken().pipe(take(1)).subscribe((token: string) => {
    //   this.apiService.createSchool(this.selected!).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => console.log(value));
    // });

    this.apiService.createSchool(this.selected!)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => {
        if (value.message !== 'School created successfully!') {
          console.warn('Some fields are empty!'); // TODO xzd3n3k toasts
        } else {
          this.router.navigateByUrl('/');
        }
      });
  }
}
