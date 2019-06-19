import { Component } from '@angular/core';
import { PeliculasServiceService } from './services/peliculas-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Peliculas';

  constructor( private _ps: PeliculasServiceService){
    // this._ps.getPopulares().subscribe( data => console.log(data));
    this._ps.buscarPelicula('wall-e').subscribe( data => console.log(data))
  }
}
