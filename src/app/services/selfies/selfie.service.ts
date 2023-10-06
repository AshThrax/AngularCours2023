import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Selfies } from 'src/app/models/selfies';
import { LoggerService } from './../Logger/logger.service';
import { environment } from 'src/app/environments/environment';
/**
 *
 */
@Injectable({
  providedIn: 'root'
})
export class SelfieService {

  constructor(private _loggerService: LoggerService,private _httpClient: HttpClient) { }
  /**
   *
   * @returns un tableau de selfie
   *
   */
  getAll():Selfies[]{

    const tableau: Selfies[]=[]
     tableau.push(
      {image:'https://i.redd.it/mqpco4ak0nc81.jpg',
      titre:'superselfie',
      id:0,
      Wookie:{
        nom:'chewie',
        selfies: []}});

      tableau.push(
          {image:'https://lumiere-a.akamaihd.net/v1/images/wookiee-bio-1_541e8c87.jpeg',
          titre:'titre selfie',
          id:1,
          Wookie:{
            nom:'chewie 2',
            selfies: []}}
        );
      tableau.push(

        {image:'https://lumiere-a.akamaihd.net/v1/images/wookiee-bio-1_541e8c87.jpeg',
        titre:'titre selfie',
        id:2,
        Wookie:{
          nom:'chewie 2',
          selfies: []}},
      );
      tableau.push(
        {image:'data:image/jpeg;base64,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',
        titre:'agrougrou',
        id:3,
        Wookie:{
          nom:'MArc',
          selfies: []}},
      );
      tableau.push(

        {image:'https://www.legaliondesetoiles.com/photo/art/grande/7317938-11257125.jpg?v=1671461292',
        titre:'Han solo shot first',id:4,
        Wookie:{

          nom:'Bob',
          selfies: []}},
      );
      tableau.push(

        {image:'https://cdn.openart.ai/stable_diffusion/c60280a67d0a54fdc589825de5f8a7d51920329e_2000x2000.webp',
        titre:'chewbaca on the beach',
        id:5,
        Wookie:{
          nom:'chewie',
          selfies: []}},
      );
   return tableau;
  }
/**
 * retourne une obersable pour s'inscire a la reception des tableaux de wookies
 *
 * @returns
 */
  getAll_Observable (): Observable<Selfies[]>
  {
/**
 *   const monTableau= this.getAll();
     //return of(monTableau);
     return interval(1000).pipe(
      map(entier=> [
        {
          image:'https://i.redd.it/mqpco4ak0nc81.jpg',
          titre:'superselfie '+entier,
          Wookie:{
          nom:'chewie',
          selfies: []}
        }
      ])
     );

 */


   return this._httpClient.get<Selfies[]>(environment.apis.Selfies.url);
  }
  /**
   * ajout d'un selfie
   * @param selfie
   * @returns
   */
  ajouter(selfie: Selfies): Observable<Selfies>
  {
      return this._httpClient.post<Selfies>(environment.apis.Selfies.url,selfie);
  }
}
