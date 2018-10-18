import { Component, OnInit } from '@angular/core';
import { SiteTheme } from './site-theme';
import { ThemeStorageService } from './theme-storage/theme-storage.service';
import { StyleManagerService } from './style-manager/style-manager.service';

@Component({
  selector: 'pms-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  currentTheme;

  themes: SiteTheme[];

  constructor(private styleManagerService: StyleManagerService, private themeStorageService: ThemeStorageService) {
  }

  ngOnInit() {
    this.themes = this.themeStorageService.getAllThemes();
    const currentTheme = this.themeStorageService.getStoredTheme();
    if (currentTheme) {
      this.updateTheme(currentTheme);
    }
  }

  updateTheme(theme) {
    this.currentTheme = this.getCurrentThemeFromHref(theme.href);

    if (theme.isDefault) {
      this.styleManagerService.removeStyle('theme');
    } else {
      this.styleManagerService.setStyle('theme', `assets/themes/${theme.href}`);
    }

    if (this.currentTheme) {
      this.themeStorageService.storeTheme(this.currentTheme);
    }
  }

  private getCurrentThemeFromHref(href: string): SiteTheme {
    return this.themes.find(theme => theme.href === href);
  }
}
