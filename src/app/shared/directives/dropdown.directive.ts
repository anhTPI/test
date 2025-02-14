import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Output() isMenuOpen = new EventEmitter<boolean>();
  isOpen: boolean = false;

  constructor() { }

  @HostListener('click') toggleMenu() {
    this.isOpen = !this.isOpen;
    this.isMenuOpen.emit(this.isOpen);
  }
}
