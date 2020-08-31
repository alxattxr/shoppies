import { Component } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  constructor() { }

  value="test";

  public eraseEntry(): void {
    this.value = '';  
  }

  public onSubmit(): void {
    console.log("current: ", this.value);
  }

}
