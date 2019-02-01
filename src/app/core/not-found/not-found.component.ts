import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  // templateUrl: './not-found.component.html',
  template: `
    <h1>Not Found Template</h1>
    <h2>404</h2>
    <a routerLink="/">Go home</a>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
