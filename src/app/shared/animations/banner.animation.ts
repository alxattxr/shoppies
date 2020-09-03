import { trigger, transition, style, animate } from '@angular/animations';

export const BannerAnimation = trigger('list', [
    trigger('grow', [
        transition('void <=> *', []),
        transition('* <=> *', [
          style({height: '*', opacity: 0}),
          animate('.2s ease'),
        ], {params: {startHeight: 0}})
      ])
]);