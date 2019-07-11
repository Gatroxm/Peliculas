import { Component, OnInit } from '@angular/core';
import { PeliculasServiceService } from 'src/app/services/peliculas-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
})
export class PeliculaComponent implements OnInit {
  pelicula:any;
  regresarA:string='';
  busqueda:string='';
  constructor( public _ps: PeliculasServiceService, public route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.regresarA = params['pag'];
      if(params['busqueda']){
        this.busqueda = params['busqueda'];
      }
      this._ps.getPelicula(params['id']).subscribe( pelicula => this.pelicula = pelicula)
    })
   }

  ngOnInit() {
  }

}
