import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { File } from '@models/file.model';
import { Folder } from '@models/folder.model';

import { ICONS } from '@constants/file.constant';

@Component({
  selector: 'app-table-files',
  templateUrl: './table-files.component.html',
  styleUrls: ['./table-files.component.scss']
})
export class TableFilesComponent {
  @Input() file: File | Folder;
  @Input() isSearch = false;

  constructor(
    private router: Router
  ) {}

  get getIcon(): string {
    if (this.file.type === 'folder') return 'bxs-folder';
    const extension = this.file.name.split('.').pop();
    return ICONS[extension as keyof typeof ICONS] || 'bx-file';
  }

  getExtension(): string {
    if (this.file.type === 'folder') return 'folder';
    return this.file.name.split('.').pop() as string;
  }

  goToFolder(): void {
    if (this.file.type === 'folder') {
      this.router.navigate(['/folder', this.file._id]);
    }
  }

  buildPath(): string {
    return this.file
      .path?.reduce((acc, curr, index) =>
        (index === 0) ? curr.name : `${acc} > ${curr.name}`, '') || '';
  }

  goToFolderFromPath(): void {
    if (this.file.path && this.file.path.length > 1) {
      const lastFolder = this.file.path[this.file.path.length - 1];
      this.router.navigate(['/folder', lastFolder._id]);
    } else {
      this.router.navigate(['/']);
    }
  }

}

