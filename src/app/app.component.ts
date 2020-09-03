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
  //Hard Coded value 5 since we want a limit of 5 movies but this can be change
  private readonly limit: number = 5;
  // private timeout = 0;

  constructor(searchMovieStoreService: SearchMovieStoreService) {
    this.searchMovieStoreService = searchMovieStoreService;
  }

  ngOnInit(): void {
    //Hard Coded value 5 since we want a limit of 5 movies but this can be change.
    this.searchMovieStoreService.nominationLimit = this.limit;
    const savedNominees = JSON.parse(localStorage.getItem("nominees")) as MovieInformation[];
    if (savedNominees.length) {
      this.searchMovieStoreService.nominations = 
        this.hasMoreMoviesThanLimit(savedNominees) ? this.reduceArrayToLimit(savedNominees, this.searchMovieStoreService.nominationLimit)
        : savedNominees;
    }
  }

  private hasMoreMoviesThanLimit(movies: MovieInformation[]): boolean {
    return movies.length > this.searchMovieStoreService.nominationLimit;
  }

  private reduceArrayToLimit(movieInformationAr: MovieInformation[], limit: number): MovieInformation[]{
    console.log(movieInformationAr.slice(0, limit));
    return movieInformationAr.slice(0, limit);
  }

  //Uncomment if you want info banner if user dont move mouse for more than 30sec
  //add (document:mousemove)="onMouseMove($event)" to the first div
  //Disabled because it was a bit to intrusive for my taste but the option is here  
  // 
  // onMouseMove() {
  //   clearTimeout(this.timeout);
  //   this.timeout = window.setTimeout(() => { alert("move your mouse"); }, 30000);
  // }
}
