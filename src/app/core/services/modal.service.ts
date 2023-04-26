import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  openNewFolderModal: EventEmitter<{ open: boolean, folderID: string }> = new EventEmitter();
  openNewFileModal: EventEmitter<{ open: boolean, folderID: string }> = new EventEmitter();

  openNewFolder(folderID: string): void {
    this.openNewFolderModal.emit({ open: true, folderID });
  }

  openNewFile(folderID: string): void {
    this.openNewFileModal.emit({ open: true, folderID });
  }
}
