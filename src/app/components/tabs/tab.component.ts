import { Component, Input } from "@angular/core";

@Component({
  selector: "mmz-tab",
  standalone: true,
  templateUrl: './tab.component.html',

})
export default class TabComponent {
  @Input() tabTitle!: string;
  @Input() active = false;
}
