import {EventEmitter, Injectable} from '@angular/core';
import {SiteLanguage} from '../site-language';

@Injectable({
  providedIn: 'root'
})
export class LanguageStorageService {

  static storageKey = 'app-language-current-language';
  static defaultLanguage: SiteLanguage = {languageKey: 'en'};

  constructor() {
  }

  public onThemeUpdate: EventEmitter<SiteLanguage> = new EventEmitter<SiteLanguage>();

  public storeLanguage(language: SiteLanguage) {
    try {
      window.localStorage[LanguageStorageService.storageKey] = JSON.stringify(language);
    } catch (e) {
    }

    this.onThemeUpdate.emit(language);
  }

  public getStoredLanguage(): SiteLanguage {
    try {
      return JSON.parse(window.localStorage[LanguageStorageService.storageKey] || JSON.stringify(LanguageStorageService.defaultLanguage));
    } catch (e) {
      return null;
    }
  }

  public clearStorage() {
    try {
      window.localStorage.removeItem(LanguageStorageService.storageKey);
    } catch (e) {
    }
  }
}
