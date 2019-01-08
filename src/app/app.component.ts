import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h2>{{ title }}</h2>`
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Hello';
  }
}
