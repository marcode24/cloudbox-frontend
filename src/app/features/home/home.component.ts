import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from '@services/auth.service';
import { FileService } from '@services/file.service';
import { FolderService } from '@services/folder.service';

import { Folder } from '@models/folder.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  root: Folder;
  folderCreatedSubscription: Subscription;
  filesCreatedSubscription: Subscription;
  constructor(
    private authService: AuthService,
    private folderService: FolderService,
    private fileService: FileService,
  ) { }

  ngOnDestroy(): void {
    this.folderCreatedSubscription.unsubscribe();
    this.filesCreatedSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.root = this.authService.userActive.rootFolder;
    this.folderService.breadcrumb = [
      { _id: this.root._id as string,
        name: this.root.name,
        color: this.root.color
      }
    ];
    this.folderCreatedSubscription = this.folderService
      .folderCreated.subscribe(({folder, isNew}) => {
        if (isNew) this.root.folders.push(folder);
        else this.root.folders = this.root.folders.map((f) => f._id === folder._id ? folder : f);
        this.orderFolders();
    });
    this.filesCreatedSubscription = this.fileService.filesCreated.subscribe((files) => {
      this.root.files.push(...files);
      this.orderFiles();
    });
  }

  private orderFolders(): void {
    this.root.folders.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
  }

  private orderFiles(): void {
    this.root.files.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
  }
}
