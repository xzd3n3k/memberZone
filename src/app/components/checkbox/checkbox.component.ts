import {ChangeDetectorRef, Component, Input} from '@angular/core';

@Component({
  selector: 'mmz-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input() label?: string;
  @Input() value?: string;
  @Input() color: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
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
