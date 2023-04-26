import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { FileService } from '@services/file.service';
import { FolderService } from '@services/folder.service';

import { File } from '@models/file.model';
import { Folder } from '@models/folder.model';

import { isMongoId } from '@utils/mongo.util';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit, OnDestroy {
  folder: Folder;
  folderCreatedSubscripion: Subscription;
  filesUploadedSubscription: Subscription;
  loading = false;
  allFiles: (Folder | File)[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private folderService: FolderService,
    private fileService: FileService,
  ) { }

  ngOnDestroy(): void {
    this.folderCreatedSubscripion.unsubscribe();
    this.filesUploadedSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.folderCreatedSubscripion = this.folderService.folderCreated.subscribe((folder) => {
      this.folder.folders.push(folder);
      this.orderFolders();
      this.mixFilesAndFolders();
    });
    this.filesUploadedSubscription = this.fileService.filesCreated.subscribe((files: File[]) => {
      this.folder.files.push(...files);
      this.mixFilesAndFolders();
    });
    this.activatedRoute.params.subscribe(({folderId}) => {
      if(!isMongoId(folderId)) return this.router.navigate(['/']);
      this.getFolder(folderId);
    });
  }

  getFolder(id: string): void {
    this.loading = true;
    this.folderService.getFolder(id).subscribe({
      next: (folder) => {
        this.folder = folder;
        this.mixFilesAndFolders();
      },
      complete: () => this.loading = false
    });
  }

  private orderFolders(): void {
    this.folder.folders.sort((a, b) => a.name > b.name ? 1 : -1);
  }

  mixFilesAndFolders(): void {
    const { folders, files } = this.folder;
    this.allFiles = [...folders, ...files];
  }

}
