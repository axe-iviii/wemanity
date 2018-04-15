import { Component } from '@angular/core';
//Services
import { LocaleService } from '../../services/locale.service';
import { ThemeService  } from '../../services/theme.service';


@Component({
  selector   : 'settings-component',
  templateUrl: './settings.component.html',
  styleUrls  : ['./settings.component.scss']
})


export class SettingsComponent {

  public locales: string[];

  constructor(
    private _localeService: LocaleService,
    private _themeService : ThemeService
  ) {
      this.locales = ["FR", "IT", "EN"];   // TODO: Put in the folder data
    }

  //------------------------------------------------------------------------//
  //------------------------------- LOCALE ---------------------------------//
  //------------------------------------------------------------------------//

  displayText() {
    return this._localeService.getTexts();
  }

  //------------------------------------------------------------------------//
  //-------------------------------- THEME ---------------------------------//
  //------------------------------------------------------------------------//

  displayTheme() {
    return this._themeService.getTheme();
  }

}
