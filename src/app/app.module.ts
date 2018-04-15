import { NgModule      } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoot       } from './app.component';
//Modules
import { ExperiencesModule } from './experiences/experiences.module';
import { TripsModule       } from './trips/trips.module';
//Services
import { DataService    } from '../services/data.service';
import { LeafletService } from '../services/leaflet.service';
import { LocaleService  } from '../services/locale.service';
import { ThemeService   } from '../services/theme.service';


@NgModule({
  declarations: [
    AppRoot
  ],
  imports: [
    //Feature modules
    ExperiencesModule,
    TripsModule,
    //Angular modules
    BrowserModule
  ],
  providers: [
    //Services
    DataService,
    LeafletService,
    LocaleService,
    ThemeService
  ],
  bootstrap: [AppRoot]
})


export class AppModule {}
