import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { SearchMovieStoreService } from './services/search-movie-store.service';
import { MovieInformation } from './models/MovieInformation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'shoppie-app';
  searchedString = 'test';
  public nominees: MovieInformation[] = [];

  public searchMovieStoreService: SearchMovieStoreService;

  constructor(searchMovieStoreService: SearchMovieStoreService) {
    this.searchMovieStoreService = searchMovieStoreService;
  }

  ngOnInit(): void {
    this.searchMovieStoreService._nominations.subscribe(res => {
      this.nominees = res;
      console.log(res);
    })
  }
}
