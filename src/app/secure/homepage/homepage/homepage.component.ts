import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  iterate3 = [
    { hello: '' },
    { hello: '' },
    { hello: '' },
    { hello: '' },
    { hello: '' },
    { hello: '' },
    { hello: '' },
    { hello: '' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
