import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit, inject
} from "@angular/core";

import TabComponent from "./tab.component";
import {NgClass, NgForOf} from "@angular/common";
import {ActiveTabService} from "../../active-tab.service";

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
  private activeTabService = inject(ActiveTabService);

  ngAfterContentInit() {
    console.log('aftercontentinit');
    const activeTabs = this.tabs.filter(tab => tab.active);
    this.activeTabService.activeTab$.subscribe(activeTab => {
      (activeTab.length > 0) ? this.selectTab(this.tabs.find(tab => tab.tabTitle === activeTab)!) : this.selectTab(this.tabs.first);
    })

    // if (activeTabs.length === 0) {
    //   this.selectTab(this.tabs.first);
    // }
  }

  selectTab(tab: TabComponent) {
    this.activeTabService.markTabAsActive(tab.tabTitle);
    this.tabs.toArray().forEach(tab => (tab.active = false));
    tab.active = true;
  }
}
