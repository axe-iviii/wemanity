import { Component } from '@angular/core';
//Services
import { ThemeService } from '../services/theme.service';


@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})


export class AppRoot {

  constructor(
    private _themeService: ThemeService
  ) {}

  //------------------------------------------------------------------------//
  //-------------------------------- THEME ---------------------------------//
  //------------------------------------------------------------------------//

  displayTheme() {
    return this._themeService.getTheme();
  }

}
