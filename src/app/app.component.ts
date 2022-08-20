import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private __translateService: TranslateService) {}

  ngOnInit(): void {
    this.__translateService.setDefaultLang('en-US');
  }

  changeLanguage(language: string): void {
    this.__translateService.setDefaultLang(language);
  }
}
