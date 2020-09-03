import { ListComponent } from './../shared/components/list/list.component';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SearchMovieStoreService } from '../services/search-movie-store.service';
import { MovieInformation } from '../models/MovieInformation.model';
import { ListAnimation } from '../shared/animations/list.animation';

@Component({
  selector: 'nominations-container',
  templateUrl: './nominations-container.component.html',
  styleUrls: [
      './nominations-container.component.scss',
    './../shared/components/list/list.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ListAnimation]
})
export class NominationsContainerComponent extends ListComponent{
  @Input() nominees: MovieInformation[];
  @Input() searchedString: string;

  constructor(searchMovieStoreService: SearchMovieStoreService) {
    super(searchMovieStoreService);
  }

  public removeFronNominations(nominee: MovieInformation): void {
    this.searchMovieStoreService.removeElementFromNominations(nominee);
  }

}
