import { trigger, transition, style, animate } from '@angular/animations';

export const CardAnimation = trigger('items', [
  transition(':enter', [
    style({ transform: 'scale(0.8)', opacity: 0 }),
    animate('0.5s cubic-bezier(.8, -0.6, 0.2, 1.5)',
      style({ transform: 'scale(1)', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)', opacity: 1, height: '*' }),
    animate('0.5s cubic-bezier(.8, -0.6, 0.2, 1.5)',
      style({
        transform: 'scale(0.8)', opacity: 0,
        height: '0px', margin: '0px'
      }))
  ])
])