import { Component, ChangeDetectionStrategy, Input, OnChanges, OnInit } from '@angular/core';
import { SearchMovieStoreService } from '../services/search-movie-store.service';
import { MovieInformation } from '../models/MovieInformation.model';

@Component({
  selector: 'nominations-container',
  templateUrl: './nominations-container.component.html',
  styleUrls: ['./nominations-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NominationsContainerComponent implements OnInit, OnChanges {
  @Input() nominees: MovieInformation[];
  @Input() searchedString: string;
  public searchMovieStoreService: SearchMovieStoreService;

  constructor(searchMovieStoreService: SearchMovieStoreService) {
    this.searchMovieStoreService = searchMovieStoreService;
  }

  ngOnInit(): void {
  }

  public removeFronNominations(nominee: MovieInformation): void {
    console.log(nominee);
    this.searchMovieStoreService.removeElementFromNominations(nominee);
    console.log('current nominations: ', this.searchMovieStoreService.nominations);
  }


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("HELLOOOOOO", this.nominees);
  }
}
