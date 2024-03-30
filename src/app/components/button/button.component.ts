import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'mmz-button',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit{
  @Input() label?: string;
  @Input() icon?: string;
  @Input() color: 'primary' | 'secondary' | 'danger' | 'success' | 'transparent' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() disabled: boolean = false;

  protected iconPath: string = '';

  ngOnInit() {
  this.iconPath = `assets/${this.icon}.svg`
  }

  protected getSize(): string {
    return `var(--button-font-size-${this.size})`;
  }

}
