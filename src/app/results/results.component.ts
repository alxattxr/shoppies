import { ListComponent } from './../shared/components/list/list.component';
import { ListAnimation } from './../shared/animations/list.animation';
import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { SearchMovieStoreService } from '../services/search-movie-store.service';
import { MovieInformation } from '../models/MovieInformation.model';
import { SearchResults } from '../models/SearchResults.model';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: [
    './results.component.scss',
    './../shared/components/list/list.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ListAnimation]
})
export class ResultsComponent extends ListComponent implements OnChanges {
  @Input() searchResults: SearchResults;
  @Input() nominees: MovieInformation[];
  @Input() searchedString: string;
  @Input() isLoading: boolean;

  constructor(searchMovieStoreService: SearchMovieStoreService) {
    super(searchMovieStoreService);
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(this.searchResults);
  }

  public addToNomination(nominee: MovieInformation): void {
    this.searchMovieStoreService.addElementToNominations(nominee);
  }


}
