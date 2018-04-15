import { Injectable } from '@angular/core';
//Locales
import { TEXTS_EN } from '../locale/EN';
import { TEXTS_FR } from '../locale/FR';
import { TEXTS_IT } from '../locale/IT';


@Injectable()


export class LocaleService {

	private TEXTS: any;

	constructor() {
		this.TEXTS = TEXTS_EN;
	}

	//------------------------------------------------------------------------//
	//--------------------------- GETTERS / SETTERS --------------------------//
	//------------------------------------------------------------------------//

	getTexts() {
		return this.TEXTS;
	}

	//------------------------------------------------------------------------//
	//-------------------------------- LOCALE --------------------------------//
	//------------------------------------------------------------------------//

	setLocale(locale: string) {
		if      (locale == "EN") this.TEXTS = TEXTS_EN;
		else if (locale == "FR") this.TEXTS = TEXTS_FR;
		else if (locale == "IT") this.TEXTS = TEXTS_IT;
		console.info("Locale : " + locale.toUpperCase() + " selected");
	}

}
