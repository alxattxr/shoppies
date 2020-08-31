import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NominationsContainerComponent } from './nominations-container/nominations-container.component';
import { ResultsComponent } from './results/results.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NominationsContainerComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
