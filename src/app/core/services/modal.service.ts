import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  openNewFolderModal: EventEmitter<{ open: boolean, folderID: string }> = new EventEmitter();
  openNewFileModal: EventEmitter<{ open: boolean, folderID: string }> = new EventEmitter();
  openUpdateNameModal: EventEmitter<{ folderID: string, name: string }> = new EventEmitter();

  openNewFolder(folderID: string): void {
    this.openNewFolderModal.emit({ open: true, folderID });
  }

  openNewFile(folderID: string): void {
    this.openNewFileModal.emit({ open: true, folderID });
  }

  openUpdateName(folderID: string, name: string): void {
    this.openUpdateNameModal.emit({ folderID, name });
  }
}
