import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hint2Check: boolean = false
  hint3Check: boolean = false
  showHint1Msg: boolean = false
  showHint2Msg: boolean = false
  showHint3Msg: boolean = false
  title = 'network-treasure-hunt';

  showHint1() {
    this.showHint1Msg = true
    this.hint2Check = true
    // alert('you dont wanna do this')
  }

  showHint2() {
    if (this.hint2Check) {
      this.showHint2Msg = true
      this.hint3Check = true
    }
    else
      alert('No cheating')
  }

  showHint3() {
    if (this.hint3Check)
      this.showHint3Msg = true
    else
      alert('how much will you cheat?')
  }

  close(hintNumber) {
    switch (hintNumber) {
      case 1: this.showHint1Msg = false
        break;
      case 2: this.showHint2Msg = false
        break;
      case 3: this.showHint3Msg = false
        break;
      default: this.closeAllHints()
    }
  }

  closeAllHints() {
    this.showHint1Msg = false
    this.showHint2Msg = false
    this.showHint3Msg = false
  }
}

