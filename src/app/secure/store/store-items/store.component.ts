import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  items = [
    {img:''},
    {img:''},
    {img:''},
    {img:''},
    {img:''},
    {img:''},
    {img:''},
    {img:''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
