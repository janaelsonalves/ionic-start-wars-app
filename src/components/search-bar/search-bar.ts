import { Component } from '@angular/core';

/**
 * Generated class for the SearchBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.html'
})
export class SearchBarComponent {

  title: string;
  query: string;

  constructor() {
    console.log('Hello SearchBarComponent Component');
    this.title = 'Hello World';
  }

  
}
