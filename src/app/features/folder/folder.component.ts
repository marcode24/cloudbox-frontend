import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { FolderService } from '@services/folder.service';

import { Folder } from '@models/folder.model';

import { isMongoId } from '@utils/mongo.util';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  folder: Folder;
  folderCreatedSubscripion: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private folderService: FolderService
  ) { }

  ngOnInit(): void {
    this.folderCreatedSubscripion = this.folderService.folderCreated.subscribe((folder) => {
      this.folder.folders.push(folder);
      this.orderFolders();
    });
    this.activatedRoute.params.subscribe(({folderId}) => {
      if(!isMongoId(folderId)) return this.router.navigate(['/']);
      this.getFolder(folderId);
    });
  }

  getFolder(id: string): void {
    this.folderService.getFolder(id).subscribe({
      next: (folder) => {
        this.folder = folder;
      }
    });
  }

  private orderFolders(): void {
    this.folder.folders.sort((a, b) => a.name > b.name ? 1 : -1);
  }

}
