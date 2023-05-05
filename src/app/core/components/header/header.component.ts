import { Component, ElementRef, ViewChild } from '@angular/core';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('dropdownUser') dropdownUser: ElementRef;
  @ViewChild('inputSearch') inputSearch: ElementRef;
  userActive = this.authService.userActive;

  constructor(
    private authService: AuthService
  ) { }

  changeVisibilitySidebar(): void {
    const sidebarElement = document.querySelector('.sidebar') as HTMLElement;
    sidebarElement.classList.toggle('closed');
    const overlayElement = document.querySelector('.overlay') as HTMLElement;
    overlayElement.classList.toggle('opened');
  }

  changeVisibilityOptions(): void {
    this.dropdownUser.nativeElement.classList.toggle('active');
  }

  logout(): void {
    this.authService.logout();
  }

  focusInputSearch(): void {
    this.inputSearch.nativeElement.classList.toggle('focus');
  }
}
