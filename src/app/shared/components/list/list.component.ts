import { ListAnimation } from './../../../shared/animations/list.animation';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchMovieStoreService } from '../../../services/search-movie-store.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ListAnimation],
})
export class ListComponent {
    public searchMovieStoreService: SearchMovieStoreService;

    constructor(searchMovieStoreService: SearchMovieStoreService) {
        this.searchMovieStoreService = searchMovieStoreService;
    }

}