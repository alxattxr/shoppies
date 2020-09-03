import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SearchResults } from '../models/SearchResults.model';
import { MovieInformation } from '../models/MovieInformation.model';
import { BannerState } from '../models/BannerState.model';
import { BannerContext } from '../enums/BannerContext.enum';

@Injectable({
  providedIn: 'root',
})
export class SearchMovieStoreService {
  //State: Search
  readonly _searchedString = new BehaviorSubject<string>(null);
  readonly searchedString$ = this._searchedString.asObservable();
  readonly _isLoading = new BehaviorSubject<boolean>(false);
  readonly isLoading$ = this._isLoading.asObservable();
  readonly _results = new BehaviorSubject<SearchResults>({
    Response: false,
    Search: [],
    totalResults: ''
  });
  readonly results$ = this._results.asObservable();

  //State: Nominations
  readonly _nominations = new BehaviorSubject<MovieInformation[]>([]);
  readonly nominations$ = this._nominations.asObservable();
  readonly _nominationLimit = new BehaviorSubject<number>(0);
  readonly nominationLimit$ = this._nominations.asObservable();

  //State: Banner
  readonly _bannerState = new BehaviorSubject<BannerState>({
    isVisible: false,
    context: BannerContext.Success
  });
  readonly bannerState$ = this._bannerState.asObservable();


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

  get isLoading(): boolean {
    return this._isLoading.getValue();
  }

  set isLoading(state: boolean) {
    this._isLoading.next(state);
  }

  get bannerState(): BannerState {
    return this._bannerState.getValue();
  }

  set bannerState(state: BannerState) {
    this._bannerState.next(state);
  }

  get nominationLimit(): number {
    return this._nominationLimit.getValue();
  }

  set nominationLimit(limit: number) {
    this._nominationLimit.next(limit);
  }

  //Nominations functions
  public addElementToNominations(movie: MovieInformation): void {
    //imdbID should be enough but just to be sure compare Titles and year or release
    if (!this._nominations.getValue().some(nominee =>
      this.compareMovieNominee(movie, nominee)) &&
      this._nominations.getValue().length < this._nominationLimit.getValue()) {
      this._nominations.next([...this._nominations.getValue(), movie]);
      this.updateLocalStorage();
    }
  }

  public removeElementFromNominations(movie: MovieInformation): void {
    this.nominations = this._nominations.getValue().filter((m) => m !== movie);
    this.updateLocalStorage();
  }

  private compareMovieNominee(movie: MovieInformation, nominee: MovieInformation): boolean {
    return nominee.Title === movie.Title && nominee.Year === movie.Year && nominee.imdbID === movie.imdbID
  }

  private updateLocalStorage(): void {
    //Hardcoded for 'nominees' since only information storing in the local storage
    localStorage.setItem("nominees", JSON.stringify(this._nominations.getValue()));
  }

  public isNominated(nominee: MovieInformation): Observable<boolean> {
    return of(this._nominations.getValue().includes(nominee));
  }
}
