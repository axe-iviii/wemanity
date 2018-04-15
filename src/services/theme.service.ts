import { Injectable } from '@angular/core';


@Injectable()


export class ThemeService {

	private THEME: boolean;   // true: dark theme, false: light theme

	constructor() {
		this.THEME = true;
	}

	//------------------------------------------------------------------------//
	//--------------------------- GETTERS / SETTERS --------------------------//
	//------------------------------------------------------------------------//

	getTheme() {
		return this.THEME;
	}

	//------------------------------------------------------------------------//
	//--------------------------------- THEME --------------------------------//
	//------------------------------------------------------------------------//

	setTheme() {
		this.THEME = !this.THEME;
		console.info("Theme : " + ((this.THEME) ? "dark" : "light") + " selected");
	}

}
