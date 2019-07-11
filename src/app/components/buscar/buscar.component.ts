import { Component, OnInit } from '@angular/core';
import { PeliculasServiceService } from 'src/app/services/peliculas-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  buscar:string = "";
  constructor( public _ps: PeliculasServiceService, public route: ActivatedRoute) {

    this.route.params.subscribe( params => {
      if ( params['texto']){
        this.buscar = params['texto'];
        this.buscarPelicula();
      }
    })
  }

  ngOnInit() {
  }
  buscarPelicula(){
    
      if (this.buscar.length == 0){
        return;
      }
    this._ps.buscarPelicula( this.buscar ).subscribe()

  }

}
