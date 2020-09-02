import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { SearchMovieStoreService } from '../services/search-movie-store.service';
import { MovieInformation } from '../models/MovieInformation.model';
import { SearchResults } from '../models/SearchResults.model';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent implements OnChanges {
  public searchMovieStoreService: SearchMovieStoreService;
  @Input() searchResults: SearchResults;
  @Input() nominees: MovieInformation[];
  @Input() searchedString: string;

  constructor(searchMovieStoreService: SearchMovieStoreService) {
    this.searchMovieStoreService = searchMovieStoreService;
  }

  public addToNomination(nominee: MovieInformation): void {
    console.log(nominee);
    this.searchMovieStoreService.addElementToNominations(nominee);
    console.log(
      'current nominations: ',
      this.searchMovieStoreService.nominations
    );
  }


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(this.searchResults, this.searchedString);
  }


}
