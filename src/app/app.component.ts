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
  public searchMovieStoreService: SearchMovieStoreService;

  constructor(searchMovieStoreService: SearchMovieStoreService) {
    this.searchMovieStoreService = searchMovieStoreService;
  }

  ngOnInit(): void {
    const savedNominees = JSON.parse(localStorage.getItem("nominees")) as MovieInformation[];
    if (savedNominees.length) {
      this.searchMovieStoreService.nominations = savedNominees;
    }
  }
}
