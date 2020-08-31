import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent {
  @Input() searchedString: string;

  list = [1,2,2,2,2,2,2,2,2]
  constructor() { }

}
