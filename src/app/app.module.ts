import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modulos

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PeliculasServiceService } from './services/peliculas-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    PeliculasServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
