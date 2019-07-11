import { Component, OnInit } from '@angular/core';
import { PeliculasServiceService } from 'src/app/services/peliculas-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  cartelera:any;
  populares:any;
  populareskids:any;
  constructor( public _ps: PeliculasServiceService ) {

    this._ps.getCartelera().subscribe( data => this.cartelera = data);
    this._ps.getPopulares().subscribe( data => this.populares = data);
    this._ps.getPopularesKids().subscribe( data => this.populareskids = data);
   }

  ngOnInit() {
  }

}
