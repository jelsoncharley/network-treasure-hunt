import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-store',
  templateUrl: './local-store.component.html',
  styleUrls: ['./local-store.component.scss']
})
export class LocalStoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem('treasureLink', 'http://localhost:4200/doyoulikechess')
  }

}
