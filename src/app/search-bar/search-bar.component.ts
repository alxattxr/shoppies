import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { SearchMovieStoreService } from '../services/search-movie-store.service';
import { SearchService } from '../services/search-movies.service';
import { SearchResults } from '../models/SearchResults.model';
import { ResultType } from '../enums/ResultType.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnDestroy {
  private _subscription: Subscription;
  public searchedTerm = '';
  //Since we only want movies
  private searchType: ResultType = ResultType.Movie;

  constructor(
    private _searchMovieStoreService: SearchMovieStoreService,
    private _searchService: SearchService
  ) { }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public eraseEntry(): void {
    this.searchedTerm = '';
  }

  public onSubmit(): void {
    this._searchMovieStoreService.searchedString = this.searchedTerm;
    this._searchMovieStoreService.isLoading = true;
    this._subscription = this._searchService
      .getMoviesInformations(this.searchedTerm, this.searchType)
      .subscribe((searchResult: SearchResults) => {
        this._searchMovieStoreService.results = searchResult;
        this._searchMovieStoreService.isLoading = false;
      });
  }
}
