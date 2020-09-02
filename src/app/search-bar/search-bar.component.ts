import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchMovieStoreService } from '../services/search-movie-store.service';
import { SearchService } from '../services/search-movies.service';
import { SearchResults } from '../models/SearchResults.model';
import { ResultType } from '../enums/ResultType.enum';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent {
  constructor(
    private _searchMovieStoreService: SearchMovieStoreService,
    private _searchService: SearchService
  ) { }

  public searchedTerm = '';
  //Since we only want movies
  private searchType: ResultType = ResultType.Movie;

  public eraseEntry(): void {
    this.searchedTerm = '';
  }

  public onSubmit(): void {
    this._searchMovieStoreService.searchedString = this.searchedTerm;
    this._searchService
      .getMoviesInformations(this.searchedTerm, this.searchType)
      .subscribe((searchResult: SearchResults) => {
        this._searchMovieStoreService.results = searchResult;
        console.log('test now:', this._searchMovieStoreService.results);
      });
  }
}
