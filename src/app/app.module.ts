import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CharaterDetailsComponent } from './feature/character-info/charater-details/charater-details.component';
import { CharaterListComponent } from './feature/character-info/charater-list/charater-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharaterListComponent,
    CharaterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
