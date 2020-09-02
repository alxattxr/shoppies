import { Component } from '@angular/core';
import { SearchMovieStoreService } from '../services/search-movie-store.service';
import { MovieInformation } from '../models/MovieInformation.model';

@Component({
  selector: 'nominations-container',
  templateUrl: './nominations-container.component.html',
  styleUrls: ['./nominations-container.component.scss'],
})
export class NominationsContainerComponent {
  public searchMovieStoreService: SearchMovieStoreService;

  constructor(searchMovieStoreService: SearchMovieStoreService) {
    this.searchMovieStoreService = searchMovieStoreService;
  }

  public removeFronNominations(nominee: MovieInformation): void {
    console.log(nominee);
    this.searchMovieStoreService.removeElementFromNominations(nominee);
    console.log('current nominations: ', this.searchMovieStoreService.nominations);
  }
}
