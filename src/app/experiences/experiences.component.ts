import { Component } from '@angular/core';
//Classes
import { Experience } from '../../classes/experience';
//Services
import { LocaleService } from '../../services/locale.service';
import { ThemeService  } from '../../services/theme.service';


@Component({
  selector   : 'experiences-component',
  templateUrl: './experiences.component.html',
  styleUrls  : ['./experiences.component.scss']
})


export class ExperiencesComponent {

  public experiences: Experience[];

  constructor(
    private _localeService: LocaleService,
    private _themeService : ThemeService
  ) {}

  ngDoCheck() {
    this.experiences = [   // TODO: Data in the folder data
      {id: 1, title: this.displayText().EXPERIENCES_ITEM_1_TITLE, subtitle: this.displayText().EXPERIENCES_ITEM_1_SUBTITLE, text: this.displayText().EXPERIENCES_ITEM_1_TEXT},
      {id: 2, title: this.displayText().EXPERIENCES_ITEM_2_TITLE, subtitle: this.displayText().EXPERIENCES_ITEM_2_SUBTITLE, text: this.displayText().EXPERIENCES_ITEM_2_TEXT},
      {id: 3, title: this.displayText().EXPERIENCES_ITEM_3_TITLE, subtitle: this.displayText().EXPERIENCES_ITEM_3_SUBTITLE, text: this.displayText().EXPERIENCES_ITEM_3_TEXT}
    ];
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
