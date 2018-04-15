import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { TripsComponent } from './trips.component';


@NgModule({
  declarations: [
    //Components
    TripsComponent
  ],
  imports: [
    //Modules
    CommonModule
  ],
  providers: [],
  exports: [
    TripsComponent
  ]
})


export class TripsModule {}
