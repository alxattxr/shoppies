import { Component, Input, OnChanges, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { MovieInformation } from '../../models/MovieInformation.model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnChanges {
  @Input() movieInformation: MovieInformation;
  @Input() nominations: MovieInformation[];
  @Output() onClick = new EventEmitter<any>();

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(this.isNominated, this.movieInformation);
  }

  public isNominated(nominee: MovieInformation) {
    if (this.nominations) {
      return this.nominations.some(nom => nom.Title === nominee.Title && nom.Year === nominee.Year && nom.imdbID === nominee.imdbID);
    }
    return false;
  }

  public onButtonClick(event: any): void {
    this.onClick.emit(event);
  }

}
