import { Component } from '@angular/core';
//Services
import { LeafletService } from '../../services/leaflet.service';
import { LocaleService  } from '../../services/locale.service';
import { ThemeService   } from '../../services/theme.service';


@Component({
  selector   : 'trips-component',
  templateUrl: './trips.component.html',
  styleUrls  : ['./trips.component.scss']
})


export class TripsComponent {

  constructor(
    private _leafletService: LeafletService,
    private _localeService : LocaleService,
    private _themeService  : ThemeService
  ) {}

  ngOnInit() {
    this.createMap();
  }

  //------------------------------------------------------------------------//
  //--------------------------------- MAP ----------------------------------//
  //------------------------------------------------------------------------//

  createMap() {
    this._leafletService.createMap("map");
    this._leafletService.addTileLayer();
    this._leafletService.addGeojsonLayer();
    this._leafletService.addCountries();
    this._leafletService.addCities();
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
