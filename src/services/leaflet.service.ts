import { Injectable } from '@angular/core';
//Classes
import { City } from '../classes/city';
//Services
import { DataService  } from './data.service';
import { ThemeService } from './theme.service';
//Plugins
import * as Leaflet from 'leaflet';


@Injectable()

export class LeafletService {

	private map      : any;
	private tiles    : any;
	private countries: any;
	private cities   : City[];

	constructor(
		private _dataService : DataService,
		private _themeService: ThemeService
	) {}

	//------------------------------------------------------------------------//
	//---------------------------------- MAP ---------------------------------//
	//------------------------------------------------------------------------//

	createMap(mapId: string) {
		// Create map
		this.map = Leaflet.map(mapId, {
			center         : [40, -10],   // Centered on France
			zoom           : 3,			      // Zoom to see at least Europe
			maxZoom        : 6,           // Too see the cities of small islands
			minZoom        : 1,           // Too see the whole world on small screens
			zoomControl    : true,        // Display the + and - buttons for the zoom
			zoomAnimation  : true,        // Smooth transition of zoom
			trackResize    : true,        // Keep the center of the map if the window is resized
			doubleClickZoom: true,        // To zoom on the pointer position and not on the center of the map
			dragging       : true         // Enable the dragging of the map
		});
	}

	//------------------------------------------------------------------------//
	//--------------------------------- TILES --------------------------------//
	//------------------------------------------------------------------------//

	addTileLayer() {
		// Add tile layer to the map
		this.tiles = Leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id         : this._themeService.getTheme() ? 'axe-iviii/cjfxug4y635zl2rmua5qp4xrv' : 'axe-iviii/cjfxuh7nk1d7b2slhg4qr6q5s',
			accessToken: 'pk.eyJ1IjoiYXhlLWl2aWlpIiwiYSI6ImNqODRsZXMwdDA5YjAycXFwNnA3ZXEyMTQifQ.9nI8E13PzjV4xqpvj1zJwQ'
		}).addTo(this.map);
	}

	setTileLayer() {
		this.tiles.remove();
		this.addTileLayer();
	}

	//------------------------------------------------------------------------//
	//------------------------------- COUNTRIES ------------------------------//
	//------------------------------------------------------------------------//

	addGeojsonLayer() {
		// Add geoJson layer to the map
		this.countries = Leaflet.geoJSON().addTo(this.map);
	}

	addCountries() {
		let countries = this._dataService.getCountries();
		for (let i=0; i<countries.length; i++) this.countries.addData(countries[i]);
	}

	addCities() {
		this.cities = this._dataService.getCities();
		for (let i=0; i<this.cities.length; i++) {
			Leaflet.circleMarker(this.cities[i].coordinates, {
				radius     : 10,              // Radius of the circle in pixels
				stroke     : true,            // To display a border
				weight     : 2,               // Weight of the border
				opacity    : 1,               // Opacity of the border
				fill       : true,            // To fill the circle
				fillOpacity: 0.5,             // Opacity the fill
				className  : "leaflet-city"   // Set a class to the circle
			}).addTo(this.map);
		}
	}


}
