import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';

import { MessageService } from './mesasage.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetTipsService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add(`Current Ladder: ${message}`);
  }

  private teamsUrl = "https://api.squiggle.com.au/?q=tips;";

  getTips(round: number) {

    this.teamsUrl = "https://api.squiggle.com.au/?q=tips;year=2019;";


    this.teamsUrl += "round=" + round +";"
    
    return this.http.get<any>(this.teamsUrl)
      .pipe(
        map(data => {
          return data.tips;
        })
        , catchError(this.handleError<any>('getTeams', []))
      );
  }

  process(data) {
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