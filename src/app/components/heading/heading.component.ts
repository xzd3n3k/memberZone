import {Component, Input} from '@angular/core';

@Component({
  selector: 'mmz-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
  @Input() align: 'left' | 'right' | 'center' = 'center';
  @Input() size: number = 20;

}
