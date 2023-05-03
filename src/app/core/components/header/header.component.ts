import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  changeVisibilitySidebar(): void {
    const sidebarElement = document.querySelector('.sidebar') as HTMLElement;
    sidebarElement.classList.toggle('closed');
  }
}
