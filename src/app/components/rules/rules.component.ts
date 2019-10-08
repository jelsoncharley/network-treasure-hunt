import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  constructor(private router: Router) { }

  count: number = 0;

  ngOnInit() {
  }

  proceed() {
    this.router.navigate(['home'])
  }

  giveHint() {
    this.count++
    if (this.count >= 30 && this.count <= 40) {
      console.log("Try inspecting the element")
    }
    if (this.count >= 50) {
      console.log("A div is covering the button! Remove it some how.")
    }
    console.log(50 - this.count)
  }
}
