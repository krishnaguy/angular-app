import { HostListener, HostBinding, ElementRef } from '@angular/core';

import { Directive } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isShown = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event): void {
    this.isShown = this.elRef.nativeElement.contains(event.target) ? !this.isShown : false;
  }

  constructor(private elRef: ElementRef) { }

}
