import { Component, Input } from '@angular/core';
//Classes
import { Experience } from '../../../../classes/experience';


@Component({
  selector   : 'experience-component',
  templateUrl: './experience.component.html',
  styleUrls  : ['./experience.component.scss']
})


export class ExperienceComponent {

  @Input() experience: Experience;

  constructor() {}

}
