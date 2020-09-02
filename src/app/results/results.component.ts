import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchMovieStoreService } from '../services/search-movie-store.service';
import { MovieInformation } from '../models/MovieInformation.model';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  public searchMovieStoreService: SearchMovieStoreService;

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
}
