import { Component, OnInit } from '@angular/core';
import { data } from "../../../data/links"

@Component({
  selector: 'app-lost-api',
  templateUrl: './lost-api.component.html',
  styleUrls: ['./lost-api.component.scss']
})
export class LostApiComponent implements OnInit {

  data: any;

  constructor() {
    this.data = data
  }

  ngOnInit() {
    this.shuffle(this.data)
  }

  shuffle(data: [][]) {
    for (let i = 0; i < data.length; i++)
      for (let j = 0; j < data[i].length; j++) {
        let ii = Math.floor(Math.random() * data.length)
        let jj = Math.floor(Math.random() * data[i].length)

        let temp = data[i][j]
        data[i][j] = data[ii][jj]
        data[ii][jj] = temp
      }
  }
}
