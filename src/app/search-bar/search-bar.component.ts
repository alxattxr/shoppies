import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { SearchMovieStoreService } from '../services/search-movie-store.service';
import { SearchService } from '../services/search-movies.service';
import { SearchResults } from '../models/SearchResults.model';
import { ResultType } from '../enums/ResultType.enum';
import { Subscription } from 'rxjs';
import { BannerContext } from '../enums/BannerContext.enum';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnDestroy {
  private _subscription: Subscription;
  //Since we only want movies
  private _searchType: ResultType = ResultType.Movie;
  public searchedTerm: string = '';

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
    if (this.searchedTerm) {
      this._searchMovieStoreService.searchedString = this.searchedTerm;
      this._searchMovieStoreService.isLoading = true;
      this._subscription = this._searchService
        .getMoviesInformations(this.searchedTerm, this._searchType)
        .subscribe((searchResult: SearchResults) => {
          this._searchMovieStoreService.results = searchResult;
          this._searchMovieStoreService.isLoading = false;
        }, err => {
          console.error(err);
          this._searchMovieStoreService.isLoading = false;
        });
    } else {
      this._searchMovieStoreService.bannerState = { isVisible: true, context: BannerContext.Alert, message: "Cannot search with an empty string. Please enter a movie title" }
      setTimeout(() => {
        this._searchMovieStoreService.bannerState = { ...this._searchMovieStoreService.bannerState, isVisible: false };
      }, 3000);
    }
  }
}
