import { NgModule      } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoot       } from './app.component';


@NgModule({
  declarations: [
    AppRoot
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppRoot]
})


export class AppModule {}
