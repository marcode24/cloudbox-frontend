import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { FolderService } from '@services/folder.service';

import { IBreadcrumb } from '@interfaces/breadcrumb.interface';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @ViewChild('dropdown') dropdown: ElementRef;
  private breadcrumb: IBreadcrumb[];
  breadcrumbShown: IBreadcrumb[] = [];
  breadcrumbDropdown: IBreadcrumb[] = [];
  private rootFolder: IBreadcrumb;
  constructor(
    private folderService: FolderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.buildBreadcrumb();
    this.router.events.subscribe(() => {
      this.buildBreadcrumb();
    });
  }

  buildBreadcrumb(): void {
    this.breadcrumb = this.folderService.breadcrumb || [];
    this.rootFolder = this.breadcrumb[0];
    if (this.breadcrumb.length > 2) {
      this.breadcrumbShown = this.breadcrumb.slice(this.breadcrumb.length - 2);
      this.breadcrumbDropdown = this.breadcrumb.slice(0, this.breadcrumb.length - 2);
    } else {
      this.breadcrumbShown = this.breadcrumb;
      this.breadcrumbDropdown = [];
    }
  }

  navigateToFolder(folderID: string): void {
    if (folderID === this.rootFolder._id) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/folder', folderID]);
    }
  }

  changeVisibility(): void {
    this.dropdown.nativeElement.classList.toggle('show');
  }

}
