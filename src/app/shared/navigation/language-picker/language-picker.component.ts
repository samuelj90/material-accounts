import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SiteLanguage} from './site-language';
import {LanguageStorageService} from './language-storage/language-storage.service';

@Component({
  selector: 'pms-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {

  siteLanguages: SiteLanguage[] = [{languageKey: 'en'}, {languageKey: 'ml'}];

  constructor(private translate: TranslateService, private  languageStorageService: LanguageStorageService) {
  }

  ngOnInit() {
    this.translate.addLangs(this.siteLanguages.map((language) => {
      return language.languageKey;
    }));
    this.translate.setDefaultLang(this.languageStorageService.getStoredLanguage().languageKey);
  }

  changeLanguage(language: SiteLanguage) {
    this.translate.use(language.languageKey);
    this.languageStorageService.storeLanguage(language);
  }
}
