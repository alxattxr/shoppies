import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SearchMovieStoreService } from '../services/search-movie-store.service';
import { MovieInformation } from '../models/MovieInformation.model';

@Component({
  selector: 'nominations-container',
  templateUrl: './nominations-container.component.html',
  styleUrls: ['./nominations-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NominationsContainerComponent {
  @Input() nominees: MovieInformation[];
  @Input() searchedString: string;
  public searchMovieStoreService: SearchMovieStoreService;

  constructor(searchMovieStoreService: SearchMovieStoreService) {
    this.searchMovieStoreService = searchMovieStoreService;
  }
  public removeFronNominations(nominee: MovieInformation): void {
    this.searchMovieStoreService.removeElementFromNominations(nominee);
  }

}
