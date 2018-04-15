import { Component, Input } from '@angular/core';
//Services
import { LocaleService } from '../../../../services/locale.service';


@Component({
  selector   : 'flag-component',
  templateUrl: './flag.component.html',
  styleUrls  : ['./flag.component.scss']
})


export class FlagComponent {

  @Input() locale: any;

  constructor(
    private _localeService: LocaleService
  ) {}

  selectLocale() {
    this._localeService.setLocale(this.locale);
  }

  isSelected() {
    return this._localeService.getTexts().locale == this.locale;
  }

}
