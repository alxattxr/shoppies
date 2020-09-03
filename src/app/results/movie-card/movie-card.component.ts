import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MovieInformation } from '../../models/MovieInformation.model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({
            transform: 'scale(0.5)', opacity: 0,
            height: '0px', margin: '0px'
          }))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {
  @Input() movieInformation: MovieInformation;
  @Input() nominations: MovieInformation[];
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
