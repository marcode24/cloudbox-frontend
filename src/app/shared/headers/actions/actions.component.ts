import { Component, Input } from '@angular/core';

import { ModalService } from '@services/modal.service';

import { Folder } from '@models/folder.model';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  @Input() folder: Folder;

  constructor(
    private modalService: ModalService,
  ) { }

  openDrop(element: HTMLButtonElement): void {
    element.classList.toggle('open');
  }

  closeDrop(element: HTMLButtonElement): void {
    element.classList.remove('open');
  }

  openNewFolderModal(element: HTMLButtonElement): void {
    this.closeDrop(element);
    this.modalService.openNewFolder(this.folder._id as string);
  }
}
