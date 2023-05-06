import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('dropdownUser') dropdownUser: ElementRef;
  @ViewChild('inputSearch') inputSearch: ElementRef;
  userActive = this.authService.userActive;
  currentValueSearch = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({ q }) => this.currentValueSearch = q || '');
  }

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

  goToSearch(query: string): void {
    if (query) this.router.navigate(['/search'], { queryParams: { q: query } });
  }

}
