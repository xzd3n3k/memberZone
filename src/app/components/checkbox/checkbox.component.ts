import {ChangeDetectorRef, Component, Input} from '@angular/core';

@Component({
  selector: 'mmz-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  @Input() label?: string;
  @Input() value?: string;
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() labelPosition: 'left' | 'right' = 'left';
  @Input() checked: boolean = false;
  @Input() indeterminate: boolean = false;
  @Input() disabled: boolean = false;

  protected toggleCheckbox() {
    this.checked = !this.checked;
  }

  protected getSize(): string {
    return `var(--checkbox-size-${this.size})`;
  }

}
