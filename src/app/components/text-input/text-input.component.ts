import {Component, Input} from '@angular/core';

@Component({
  selector: 'mmz-text-input',
  standalone: true,
  imports: [],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'small';

  protected getSize(side: 'height' | 'width'): string {
    return `var(--text-input-${side}-${this.size})`;
  }

}
