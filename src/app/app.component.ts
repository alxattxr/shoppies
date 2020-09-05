import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { SearchMovieStoreService } from './services/search-movie-store.service';
import { MovieInformation } from './models/MovieInformation.model';
import { BannerContext } from './enums/BannerContext.enum';
import { BannerAnimation } from './shared/animations/banner.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [BannerAnimation]
})
export class AppComponent implements OnInit {
  public searchMovieStoreService: SearchMovieStoreService;
  //Hard Coded value 5 since we want a limit of 5 movies but this can be change
  private _limit: number = 5;
  // private timeout = 0;

  constructor(searchMovieStoreService: SearchMovieStoreService) {
    this.searchMovieStoreService = searchMovieStoreService;
  }

  ngOnInit(): void {
    //Hard Coded value 5 since we want a limit of 5 movies but this can be change.
    this.searchMovieStoreService.nominationLimit = this._limit;
    const savedNominees = JSON.parse(localStorage.getItem("nominees")) as MovieInformation[];
    if (savedNominees.length) {
      if (this.hasMoreMoviesThanLimit(savedNominees)) {
        this.searchMovieStoreService.nominations = this.reduceArrayToLimit(savedNominees, this.searchMovieStoreService.nominationLimit);
        this.searchMovieStoreService.bannerState = { isVisible: true, context: BannerContext.Success, message: "Thank you! Your nominations list was saved! But you can always modify it." };
      } else {
        this.searchMovieStoreService.nominations = savedNominees;
      }
    }
  }

  private hasMoreMoviesThanLimit(movies: MovieInformation[]): boolean {
    return movies.length >= this.searchMovieStoreService.nominationLimit;
  }

  private reduceArrayToLimit(movieInformationAr: MovieInformation[], limit: number): MovieInformation[] {
    return movieInformationAr.slice(0, limit);
  }

  //Unreleased Feature:
  //Uncomment if you want info banner if user dont move mouse for more than 30sec
  //add (document:mousemove)="onMouseMove($event)" to the first div
  //Disabled because it was a bit to intrusive for my taste but the option is here  
  // 
  // onMouseMove() {
  //   clearTimeout(this.timeout);
  //   this.timeout = window.setTimeout(() => { alert("move your mouse"); }, 30000);
  // }
}
