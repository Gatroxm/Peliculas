import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: []
})
export class NavComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  buscarPelicula(texto:string){
    if(texto.length==0){
      return;
    }
    this.router.navigate(['buscar', texto]);
  }
}
