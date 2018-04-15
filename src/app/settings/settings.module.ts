import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { SettingsComponent } from './settings.component';
import { BulbComponent     } from './components/bulb/bulb.component';
import { FlagComponent     } from './components/flag/flag.component';


@NgModule({
  declarations: [
    //Components
    SettingsComponent,
    BulbComponent,
    FlagComponent
  ],
  imports: [
    //Modules
    CommonModule
  ],
  providers: [],
  exports: [
    SettingsComponent
  ]
})


export class SettingsModule {}
