import { Component, Input } from '@angular/core';


@Component({
  selector   : 'graph-component',
  templateUrl: './graph.component.html',
  styleUrls  : ['./graph.component.scss']
})


export class GraphComponent {

  @Input() data: any;

  constructor() {}

  ngOnChanges() {
    this.calculateDegrees();
  }

  //------------------------------------------------------------------------//
  //-------------------------------- DATA ----------------------------------//
  //------------------------------------------------------------------------//

  // Calculate the degrees needed for the graph : cartesian -> polar
  calculateDegrees() {
		// Initialisation
		this.data[0].degrees           = (360 / 100) * this.data[0].percentage;   // Calculate the degrees of the arc
		this.data[0].degreesTotal      = this.data[0].degrees;   // Calculate the total degrees to place the ending point
		this.data[0].coordinates_start = {x: 150, y: 0};   // Calculate the starting point of the arc
		this.data[0].coordinates_end   = {x: 150 + 150 * Math.cos((this.data[0].degreesTotal-90) * Math.PI / 180),   // Calculate the ending point of the arc
			                                  y: 150 + 150 * Math.sin((this.data[0].degreesTotal-90) * Math.PI / 180)};
		// Iterations
		for (let i = 1 ; i < this.data.length ; i++) {
			this.data[i].degrees           = (360 / 100) * this.data[i].percentage;
			this.data[i].degreesTotal      = this.data[i-1].degreesTotal + this.data[i].degrees;
			this.data[i].coordinates_start = this.data[i-1].coordinates_end;
			this.data[i].coordinates_end   = {x: 150 + 150 * Math.cos((this.data[i].degreesTotal-90) * Math.PI / 180),
				                                  y: 150 + 150 * Math.sin((this.data[i].degreesTotal-90) * Math.PI / 180)};
		}
		this.createdSVGPath();
	}

  // Create the graphic property
	createdSVGPath() {
		for (let i = 0 ; i < this.data.length ; i++) {
			this.data[i].path = "M " + this.data[i].coordinates_start.x + " " + this.data[i].coordinates_start.y +
			                    " A " + 150 + " " + 150 +
			                    " , 0, " + ((this.data[i].degrees > 180) ? "1" : "0") + ", 1, "
			                    + this.data[i].coordinates_end.x + " " + this.data[i].coordinates_end.y;
		}
	}

}
