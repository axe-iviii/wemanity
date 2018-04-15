import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { SkillsComponent } from './skills.component';
import { GraphComponent  } from './components/graph/graph.component';


@NgModule({
  declarations: [
    //Components
    SkillsComponent,
    GraphComponent
  ],
  imports: [
    //Modules
    CommonModule
  ],
  providers: [],
  exports: [
    SkillsComponent
  ]
})


export class SkillsModule {}
