import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, OnChanges } from '@angular/core';
import { MovieInformation } from '../../models/MovieInformation.model';
import { CardAnimation } from './../../shared/animations/card.animation';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  animations: [CardAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnChanges {
  @Input() movieInformation: MovieInformation;
  @Input() nominations: MovieInformation[];
  @Input() primaryBtnActiveLabel: string;
  @Input() primaryBtnDisabledLabel: string;
  @Input() activeLimit: number;

  @Output() onClick = new EventEmitter<MouseEvent>();

  public isDisabled: boolean = false;

  ngOnChanges(): void {
    this.isDisabled = (this.isNominated() || this.isLimitReached());
  }

  private isNominated(): boolean {
    if (this.nominations) {
      return this.nominations.some(nom =>
        nom.Title === this.movieInformation.Title &&
        nom.Year === this.movieInformation.Year &&
        nom.imdbID === this.movieInformation.imdbID
      );
    }
    return false;
  }

  private isLimitReached(): boolean {
    if (this.activeLimit) {
      return this.nominations.length === this.activeLimit;
    }
    return false;
  }

  public onButtonClick(event: MouseEvent): void {
    this.onClick.emit(event);
  }

  public getDisabledLabel(): string {
    return this.isLimitReached() ? "Nomination limit rechead" : this.primaryBtnDisabledLabel;
  }

}
