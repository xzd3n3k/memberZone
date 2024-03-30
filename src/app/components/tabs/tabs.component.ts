import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit
} from "@angular/core";

import TabComponent from "./tab.component";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: "mmz-tabs",
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  imports: [
    NgClass,
    NgForOf
  ],
})
export default class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach(tab => (tab.active = false));
    tab.active = true;
  }
}
