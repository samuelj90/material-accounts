import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AppTitleService {
  public titleBehaviorSubject: BehaviorSubject<string>;

  constructor(private titleService: Title) {
    this.titleBehaviorSubject = new BehaviorSubject<string>(titleService.getTitle());
  }

  setTitle(newTitle: string) {
    newTitle = (newTitle === null) ? "404" : newTitle;
    this.titleService.setTitle(environment.appTitle + "/" + newTitle);
    this.titleBehaviorSubject.next(environment.appTitle + "/" + newTitle);
  }
}
