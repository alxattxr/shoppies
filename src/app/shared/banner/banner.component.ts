import { Component, Input, OnChanges } from '@angular/core';
import { BannerContext } from '../../enums/BannerContext.enum';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() context: BannerContext;

}
