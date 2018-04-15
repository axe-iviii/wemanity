import { Component, Input } from '@angular/core';
//Services
import { LeafletService } from '../../../../services/leaflet.service';
import { ThemeService   } from '../../../../services/theme.service';


@Component({
  selector   : 'bulb-component',
  templateUrl: './bulb.component.html',
  styleUrls  : ['./bulb.component.scss']
})


export class BulbComponent {

  constructor(
    private _leafletService: LeafletService,
    private _themeService  : ThemeService
  ) {}

  selectTheme() {
    this._themeService.setTheme();
    this._leafletService.setTileLayer();
  }

  isDark() {
    return this._themeService.getTheme();
  }

}
