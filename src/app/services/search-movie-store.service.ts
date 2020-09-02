import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SearchResults } from '../models/SearchResults.model';
import { MovieInformation } from '../models/MovieInformation.model';

@Injectable({
  providedIn: 'root',
})
export class SearchMovieStoreService {
  readonly _searchedString = new BehaviorSubject<string>('');
  readonly searchedString$ = this._searchedString.asObservable();
  readonly _isLoading = new BehaviorSubject<boolean>(false);
  readonly isLoading$ = this._isLoading.asObservable();
  readonly _results = new BehaviorSubject<SearchResults>({
    Response: false,
    Search: [],
    totalResults: ''
  });
  readonly results$ = this._results.asObservable();
  readonly _nominations = new BehaviorSubject<MovieInformation[]>([]);
  readonly nominations$ = this._nominations.asObservable();

  get searchedString(): string {
    return this._searchedString.getValue();
  }

  set searchedString(str: string) {
    this._searchedString.next(str);
  }

  get results(): SearchResults {
    return this._results.getValue();
  }

  set results(results: SearchResults) {
    this._results.next(results);
  }

  get nominations(): MovieInformation[] {
    return this._nominations.getValue();
  }

  set nominations(nominations: MovieInformation[]) {
    this._nominations.next(nominations);
  }

  //Nominations functions
  public addElementToNominations(movie: MovieInformation): void {
    //imdbID should be enough but just to be sure compare Titles and year or release
    if (!this._nominations.getValue().some(nominee => this.compareMovieNominee(movie, nominee)) && this._nominations.getValue().length < 5) {
      this._nominations.next([...this._nominations.getValue(), movie]);
      this.updateLocalStorage();
    }
  }

  private compareMovieNominee(movie: MovieInformation, nominee: MovieInformation): boolean {
    return nominee.Title === movie.Title && nominee.Year === movie.Year && nominee.imdbID === movie.imdbID
  }

  private updateLocalStorage(): void {
    localStorage.setItem("nominees", JSON.stringify(this._nominations.getValue()));
  }

  public removeElementFromNominations(movie: MovieInformation): void {
    this.nominations = this._nominations.getValue().filter((m) => m !== movie);
    this.updateLocalStorage();
  }

  public isNominated(nominee: MovieInformation): Observable<boolean> {
    return of(this._nominations.getValue().includes(nominee));
  }
}
