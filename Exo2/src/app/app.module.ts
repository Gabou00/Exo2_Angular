import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeureParentComponent } from './heure-parent/heure-parent.component';
import { HeureEnfantComponent } from './heure-enfant/heure-enfant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeureParentComponent,
    HeureEnfantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
