import { NgModule      } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoot       } from './app.component';
//Modules
import { ExperiencesModule } from './experiences/experiences.module';
//Services
import { LocaleService  } from '../services/locale.service';
import { ThemeService   } from '../services/theme.service';


@NgModule({
  declarations: [
    AppRoot
  ],
  imports: [
    //Feature modules
    ExperiencesModule,
    //Angular modules
    BrowserModule
  ],
  providers: [
    //Services
    LocaleService,
    ThemeService
  ],
  bootstrap: [AppRoot]
})


export class AppModule {}
