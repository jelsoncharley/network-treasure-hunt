import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.clear()
    console.warn("You just figured out the end point. You are one step closer tou your victory. The endpoint is /findmeinthestore")
  }



}
