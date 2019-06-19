import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasServiceService {

  private apikey: string = '8cd44c18fa9e073fe10f6abfff62c84c';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  constructor(private _http: HttpClient) { }

  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this._http.jsonp(url, '').pipe(map((res: any) => res.results));
  }

  buscarPelicula(texto: string) {

    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this._http.jsonp(url, '').pipe(
      map(res => res)
    );
  }

}