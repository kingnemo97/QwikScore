import { Injectable } from '@angular/core';

import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Team } from './team';
import { MessageService } from './mesasage.service';
import { map } from 'rxjs/operators';
import { TeamNames } from './team-names';

@Injectable({
  providedIn: 'root'
})
export class GameDetailsService {


  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add(`Current Ladder: ${message}`);
  }

  private teamsUrl = "https://api.squiggle.com.au/?q=games;";

  getGameDetails(round: number, year: number) {

    this.teamsUrl = "https://api.squiggle.com.au/?q=games;year=";
    
    this.teamsUrl += year;

    this.teamsUrl += ";round=" + round +";"
    
    return this.http.get<any>(this.teamsUrl)
      .pipe(
        map(data => {
          return data.games;
        })
        , catchError(this.handleError<any>('getTeams', []))
      );
  }

   //   /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
