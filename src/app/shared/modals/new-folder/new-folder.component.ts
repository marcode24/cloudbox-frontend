import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { FolderService } from '@services/folder.service';
import { ModalService } from '@services/modal.service';

@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.scss']
})
export class NewFolderComponent implements OnInit, OnDestroy {
  folderName = '';
  @ViewChild('modalFolder') modalFolder: ElementRef;
  private bodyElement = document.body as HTMLBodyElement;
  private openModalSubscription: Subscription;
  private modalOpened = false;
  private folderId: string;

  constructor(
    private modalService: ModalService,
    private folderService: FolderService,
  ) { }

  ngOnDestroy(): void {
    this.openModalSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.openModalSubscription = this.modalService.openNewFolderModal
      .subscribe(({ folderID }) => {
        this.folderId = folderID;
        this.openModal();
    });
  }

  openModal(): void {
    this.modalFolder.nativeElement.classList.add('modal-open');
    this.bodyElement.classList.add('modal-open');
    this.modalOpened = true;
  }

  closeModal(): void {
    this.modalFolder.nativeElement.classList.remove('modal-open');
    this.bodyElement.classList.remove('modal-open');
    this.modalOpened = false;
    this.resetData();
  }

  validateFolderName(): boolean {
    return this.folderName.length > 0 && this.folderName.length < 50;
  }

  resetData(): void {
    this.folderName = '';
  }

  createFolder(): void {
    if (this.validateFolderName()) {
      this.folderService.createFolder(this.folderName, this.folderId);
      this.closeModal();
    }
  }

  @HostListener('window:keyup.esc', ['$event'])
  onKeyup() {
    if(this.modalOpened) {
        this.closeModal();
      }
    }
}
