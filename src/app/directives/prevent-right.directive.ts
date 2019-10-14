import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[preventRightClick]'
})
export class PreventRightDirective {

  constructor() { }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
  }

}
