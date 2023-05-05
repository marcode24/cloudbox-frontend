import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { FileService } from '@services/file.service';
import { FolderService } from '@services/folder.service';

import { File } from '@models/file.model';
import { Folder } from '@models/folder.model';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit, OnDestroy {
  private folderCreatedSubscripion: Subscription;
  private filesUploadedSubscription: Subscription;
  private routerSubscription: Subscription;
  private fileDeletedSubscription: Subscription;

  folder: Folder;
  loading = false;
  allFiles: (Folder | File)[];

  constructor(
    private folderService: FolderService,
    private fileService: FileService,
    private activadedRoute: ActivatedRoute,
  ) { }

  ngOnDestroy(): void {
    this.folderCreatedSubscripion.unsubscribe();
    this.filesUploadedSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
    this.fileDeletedSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.folderCreatedSubscripion = this.folderService
      .folderCreated.subscribe(({ folder, isNew }) => {
      if (isNew) this.folder.folders.push(folder);
      else this.folder.folders = this.folder.folders.map((f) => f._id === folder._id ? folder : f);
      this.orderFolders();
      this.mixFilesAndFolders();
    });
    this.filesUploadedSubscription = this.fileService.filesCreated.subscribe((files: File[]) => {
      this.folder.files.push(...files);
      this.mixFilesAndFolders();
    });
    this.routerSubscription = this.activadedRoute.params.subscribe(() => this.getFolder());
    this.fileDeletedSubscription = this.fileService.fileDeleted.subscribe((file) => {
      this.folder.files = this.folder.files.filter((f) => f._id !== file._id);
      this.mixFilesAndFolders();
    });
  }

  getFolder(): void {
    this.loading = true;
    this.folder = this.folderService.folderTemp;
    this.mixFilesAndFolders();
    this.loading = false;
  }

  private orderFolders(): void {
    this.folder.folders.sort((a, b) => a.name > b.name ? 1 : -1);
  }

  mixFilesAndFolders(): void {
    const { folders, files } = this.folder;
    this.allFiles = [...folders, ...files];
  }

}
