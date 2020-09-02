import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultType } from '../enums/ResultType.enum';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) { }
  private readonly url = 'http://www.omdbapi.com';
  private readonly apiKey: string = '787a8590';

  //TODO: replace any -> SearchResult
  public getMoviesInformations(searchTerm: string, type: ResultType): Observable<any> {
    //TODO: refactor to make it more reusable
    return this.http
      .get(`${this.url}/?s=${searchTerm}&apikey=${this.apiKey}&type=${type}`)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.formatResponseErrors(error)
        )
      );
  }

  private formatResponseErrors(error: HttpErrorResponse) {
    return throwError({
      error: {
        error: error.error,
        status: error.status,
        statusText: error.statusText,
      },
    });
  }
}
