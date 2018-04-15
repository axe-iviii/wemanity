import { Injectable } from '@angular/core';
//Data
import { COUNTRIES, CITIES } from '../data/geo-json';


@Injectable()

export class DataService {

	constructor() {}

	//------------------------------------------------------------------------//
	//------------------------------ COUNTRIES -------------------------------//
	//------------------------------------------------------------------------//

	getCountries() {
		return COUNTRIES;
	}

	//------------------------------------------------------------------------//
	//-------------------------------- CITIES --------------------------------//
	//------------------------------------------------------------------------//

	getCities() {
		return CITIES;
	}

}
