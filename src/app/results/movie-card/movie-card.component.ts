import { Component, Input } from '@angular/core';
import { MovieInformation } from '../../models/MovieInformation.model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movieInformation: MovieInformation;
}
