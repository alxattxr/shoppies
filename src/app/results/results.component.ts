import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { SearchMovieStoreService } from '../services/search-movie-store.service';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent {
  public searchMovieStoreService: SearchMovieStoreService;

  constructor(searchMovieStoreService: SearchMovieStoreService) { 
    this.searchMovieStoreService = searchMovieStoreService;
  }

}
