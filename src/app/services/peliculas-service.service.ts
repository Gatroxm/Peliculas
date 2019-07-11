import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasServiceService {

  private apikey: string = '8cd44c18fa9e073fe10f6abfff62c84c';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  public pel:any;

  constructor(private _http: HttpClient) { }

  getCartelera() {

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7);

    let desdeString = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDay()}`;
    let hastaString = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDay()}`;

    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeString}&primary_release_date.lte=${hastaString}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this._http.jsonp(url, '').pipe(map((res: any) => res.results));
    
  }
  
  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this._http.jsonp(url, '').pipe(map((res: any) => res.results));
  }
  getPopularesKids() {
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this._http.jsonp(url, '').pipe(map((res: any) => res.results));
  }
  
  buscarPelicula(texto: string) {
    
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this._http.jsonp(url, '').pipe(
      map((res:any) => {
        this.pel = res.results;
        return res;
      })
      );
    }
  getPelicula(id:string) {
    const url = `${this.urlMoviedb}/movie/${id}?&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this._http.jsonp(url, '').pipe(map((res: any) => res));
  }

}