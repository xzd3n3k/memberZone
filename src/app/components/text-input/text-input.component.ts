import {Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'mmz-text-input',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: TextInputComponent
    }
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent implements ControlValueAccessor{
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label?: string;
  @Input() placeholder: string = '';

  text: string = '';

  touched = false;
  disabled = false;

  onInput(event: any) {
    this.markAsTouched();
    this.text = event.target.value;
    this.onChange(this.text);
  }

  onChange = (text: string) => {};

  onTouched = () => {};

  writeValue(text: string) {
    this.text = text;
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

  protected getHeight(): string {
    return `var(--text-input-height-${this.size})`;
  }

}
