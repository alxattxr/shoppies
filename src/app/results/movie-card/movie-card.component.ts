import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { MovieInformation } from '../../models/MovieInformation.model';
import { CardAnimation } from './../../shared/animations/card.animation';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  animations: [CardAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {
  @Input() movieInformation: MovieInformation;
  @Input() nominations: MovieInformation[];
  @Input() primaryBtnActiveLabel: string;
  @Input() primaryBtnDisabledLabel: string;
  @Output() onClick = new EventEmitter<MouseEvent>();

  public isNominated(nominee: MovieInformation): boolean {
    if (this.nominations) {
      return this.nominations.some(nom => nom.Title === nominee.Title && nom.Year === nominee.Year && nom.imdbID === nominee.imdbID);
    }
    return false;
  }

  public onButtonClick(event: MouseEvent): void {
    this.onClick.emit(event);
  }

}
