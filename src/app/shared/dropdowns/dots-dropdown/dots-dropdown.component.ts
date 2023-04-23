import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dots-dropdown',
  templateUrl: './dots-dropdown.component.html',
  styleUrls: ['./dots-dropdown.component.scss']
})
export class DotsDropdownComponent {
  @ViewChild('dropdown') dropdown: ElementRef;

  changeVisibility() {
    this.dropdown.nativeElement.classList.toggle('show');
  }
}
