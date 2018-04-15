import { Component } from '@angular/core';
//Classes
import { Skill } from '../../classes/skill';
//Services
import { LocaleService } from '../../services/locale.service';
import { ThemeService  } from '../../services/theme.service';


@Component({
  selector   : 'skills-component',
  templateUrl: './skills.component.html',
  styleUrls  : ['./skills.component.scss']
})


export class SkillsComponent {

  public skills: Skill[];

  constructor(
    private _localeService: LocaleService,
    private _themeService : ThemeService
  ) {}

  ngOnInit() {
    this.skills = [   // TODO: Put in the folder data
      {id: 1, name: this.displayText().SKILLS_SKILL_1_NAME, percentage: 40},
      {id: 2, name: this.displayText().SKILLS_SKILL_2_NAME, percentage: 30},
      {id: 3, name: this.displayText().SKILLS_SKILL_3_NAME, percentage: 15},
      {id: 4, name: this.displayText().SKILLS_SKILL_4_NAME, percentage: 10},
      {id: 5, name: this.displayText().SKILLS_SKILL_5_NAME, percentage:  5}
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
