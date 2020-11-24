import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'My site';

  constructor() { }

  ngOnInit() {
  }
}
