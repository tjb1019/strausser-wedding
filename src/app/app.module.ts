import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeddingComponent } from './components/wedding/wedding.component';
import { DetailsComponent } from './components/details/details.component';
import { TravelComponent } from './components/travel/travel.component';
import { RegistryComponent } from './components/registry/registry.component';

@NgModule({
  declarations: [
    AppComponent,
    WeddingComponent,
    DetailsComponent,
    TravelComponent,
    RegistryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
