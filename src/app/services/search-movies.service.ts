import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  private readonly url = 'http://www.omdbapi.com';
  private readonly apiKey: string = '787a8590';

  //TODO: Chnage type any for return model
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getMoviesInformations(searchTerm: string): Observable<any> {
    //TODO: refactor to make it more reusable
    return this.http
      .get(`${this.url}/?s=${searchTerm}&apikey=${this.apiKey}`)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.formatResponseErrors(error)
        )
      );
  }

  private formatResponseErrors(error: HttpErrorResponse) {
    return throwError({
      error : {
        error : error.error,
        status : error.status,
        statusText : error.statusText,
      },
    });
  }
}
