import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActiveTabService {
  private readonly ACTIVE_TAB_KEY = 'activeTab';
  private _activeTabSubject = new BehaviorSubject<string>('');

  activeTab$: Observable<string> = this._activeTabSubject.asObservable().pipe(
    distinctUntilChanged()
  );

  constructor() {
    const storedTab = localStorage.getItem(this.ACTIVE_TAB_KEY);
    this._activeTabSubject.next(storedTab || '');
  }

  markTabAsActive(tabName: string) {
    this._activeTabSubject.next(tabName);
    localStorage.setItem(this.ACTIVE_TAB_KEY, tabName);
  }
}

