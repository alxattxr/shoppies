import { Component, Input } from '@angular/core';
import { BannerContext } from './../../../enums/BannerContext.enum';
import { BannerAnimation } from './../../animations/banner.animation'

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [BannerAnimation]
})
export class BannerComponent {
  @Input() context: BannerContext;
}
