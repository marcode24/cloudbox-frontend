import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from '@services/auth.service';
import { FileService } from '@services/file.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy, OnInit {
  userActive = this.authService.userActive;
  private totalSizeSubscription: Subscription;
  @ViewChild('overlay') overlay: ElementRef;

  constructor(
    private authService: AuthService,
    private fileService: FileService
  ) { }
  ngOnInit(): void {
    this.totalSizeSubscription = this.fileService.updateTotalSize
      .subscribe((totalSize) => {
        this.userActive.usedSpace += totalSize;
      });
  }

  ngOnDestroy(): void {
    this.totalSizeSubscription.unsubscribe();
  }

  getProgress(): string {
    const percentage = this.userActive.usedSpace / this.userActive.totalSpace * 100;
    return `${percentage}%`;
  }

  changeVisibilitySidebar(): void {
    const sidebarElement = document.querySelector('.sidebar') as HTMLElement;
    sidebarElement.classList.toggle('closed');
    this.overlay.nativeElement.classList.toggle('opened');
  }
}
