import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'mmz-button',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label?: string;
  @Input() color: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';
  @Input() transparent: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;

  getSize(): string {
    return `var(--button-font-size-${this.size})`;
  }

}
