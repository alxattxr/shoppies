import { trigger, transition, animateChild, stagger, query } from '@angular/animations';

export const ListAnimation = trigger('list', [
    transition(':enter', [
        query('@items', stagger(30, animateChild()))
    ]),
]);