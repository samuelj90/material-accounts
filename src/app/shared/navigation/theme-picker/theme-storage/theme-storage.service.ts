import {EventEmitter, Injectable} from '@angular/core';
import {SiteTheme} from '../site-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeStorageService {
  static storageKey = 'app-theme-current-theme';

  constructor() {
  }

  public onThemeUpdate: EventEmitter<SiteTheme> = new EventEmitter<SiteTheme>();

  public storeTheme(theme: SiteTheme) {
    try {
      window.localStorage[ThemeStorageService.storageKey] = JSON.stringify(theme);
    } catch (e) {
    }

    this.onThemeUpdate.emit(theme);
  }

  public getStoredTheme(): SiteTheme {
    try {
      return JSON.parse(window.localStorage[ThemeStorageService.storageKey] || null);
    } catch (e) {
      return null;
    }
  }

  public clearStorage() {
    try {
      window.localStorage.removeItem(ThemeStorageService.storageKey);
    } catch (e) {
    }
  }

  public getAllThemes(): SiteTheme[] {
    return [
      {
        primaryColur: '#673AB7',
        accentColur: '#FFC107',
        href: 'deeppurple-amber.css',
        isDark: false,
      },
      {
        primaryColur: '#3F51B5',
        accentColur: '#E91E63',
        href: 'indigo-pink.css',
        isDark: false,
        isDefault: true,
      },
      {
        primaryColur: '#E91E63',
        accentColur: '#607D8B',
        href: 'pink-bluegrey.css',
        isDark: true,
      },
      {
        primaryColur: '#9C27B0',
        accentColur: '#4CAF50',
        href: 'purple-green.css',
        isDark: true,
      },
    ];
  }
}
