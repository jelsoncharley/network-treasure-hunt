import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  link: string = '/findmeinthestore'
  constructor() { }

  ngOnInit() {
    if (this.link == "/findmeinthestore") {
      this.link = "You just figured out the end point. You are one step closer tou your victory"
    }
  }



}
