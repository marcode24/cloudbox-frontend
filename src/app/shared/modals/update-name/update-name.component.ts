import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { FolderService } from '@services/folder.service';
import { ModalService } from '@services/modal.service';

@Component({
  selector: 'app-update-name',
  templateUrl: './update-name.component.html',
  styleUrls: ['./update-name.component.scss']
})
export class UpdateNameComponent implements OnInit, OnDestroy {
  @ViewChild('modalName') modalName: ElementRef;
  private bodyElement = document.body as HTMLBodyElement;
  private openModalSubscription: Subscription;
  private modalOpened = false;
  private folderId: string;
  newName = '';

  constructor(
    private modalService: ModalService,
    private folderService: FolderService,
  ) { }

  ngOnDestroy(): void {
    this.openModalSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.openModalSubscription = this.modalService.openUpdateNameModal
      .subscribe(({ folderID, name }) => {
        this.folderId = folderID;
        this.newName = name;
        this.openModal();
    });
  }

  openModal(): void {
    this.modalName.nativeElement.classList.add('modal-open');
    this.bodyElement.classList.add('modal-open');
    setTimeout(() => {
      const input = this.modalName.nativeElement.querySelector('input');
      input.focus();
      input.select();
    }, 50);
    this.modalOpened = true;
  }

  closeModal(): void {
    this.modalName.nativeElement.classList.remove('modal-open');
    this.bodyElement.classList.remove('modal-open');
    this.modalOpened = false;
    this.resetData();
  }

  validateFolderName(): boolean {
    return this.newName.length > 0 && this.newName.length < 50;
  }

  resetData(): void {
    this.newName = '';
  }

  updateName(): void {
    if (this.validateFolderName()) {
      this.folderService.updateFolder({
        folderID: this.folderId,
        name: this.newName,
      }).subscribe({
        next: (resp) => {
          this.folderService.folderCreated.next({
            folder: resp.folder,
            isNew: false,
          });
          this.closeModal();
        }
      });
    }
  }

  @HostListener('window:keyup.esc', ['$event'])
  onKeyup() {
    if (this.modalOpened) {
      this.closeModal();
    }
  }
}
