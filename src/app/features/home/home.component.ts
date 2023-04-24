import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from '@services/auth.service';
import { FolderService } from '@services/folder.service';

import { Folder } from '@models/folder.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  root: Folder;
  folderCreatedSubscription: Subscription;
  constructor(
    private authService: AuthService,
    private folderService: FolderService
  ) { }

  ngOnInit(): void {
    this.root = this.authService.userActive.rootFolder;
    this.folderCreatedSubscription = this.folderService.folderCreated.subscribe((folder) => {
      this.root.folders.push(folder);
      this.orderFolders();
    });
  }

  private orderFolders(): void {
    this.root.folders.sort((a, b) => a.name > b.name ? 1 : -1);
  }
}
