import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'mmz-checkbox',
  standalone: true,
  imports: [
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: CheckboxComponent,
    }
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() value?: string;
  @Input() color: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() labelPosition: 'left' | 'right' = 'left';
  @Input() checked: boolean = false;
  //TODO xzd3n3k dodelat indeterminate state
  @Input() indeterminate: boolean = false;

  touched = false;
  disabled: boolean = false;

  protected toggleCheckbox() {
    this.markAsTouched();
    this.checked = !this.checked;
    this.onChange(this.checked);
  }

  onChange = (checked: boolean) => {};

  onTouched = () => {};

  writeValue(checked: boolean) {
    this.checked = checked;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  protected getSize(): string {
    return `var(--checkbox-size-${this.size})`;
  }

}
