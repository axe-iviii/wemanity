import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { ExperiencesComponent } from './experiences.component';
import { ExperienceComponent  } from './components/experience/experience.component';


@NgModule({
  declarations: [
    //Components
    ExperiencesComponent,
    ExperienceComponent
  ],
  imports: [
    //Modules
    CommonModule
  ],
  providers: [],
  exports: [
    ExperiencesComponent
  ]
})


export class ExperiencesModule {}
