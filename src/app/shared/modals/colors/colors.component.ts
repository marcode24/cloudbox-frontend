import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { FolderService } from '@services/folder.service';
import { ModalService } from '@services/modal.service';

import { COLORS } from '@constants/colors.constant';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit, OnDestroy {
  @ViewChild('modalColors') modalColors: ElementRef;
  private bodyElement = document.body as HTMLBodyElement;
  private modalOpened = false;
  private openModalSubscription: Subscription;
  private folderId: string;

  colors: string[] = COLORS;
  selectedColor = '';
  constructor(
    private modalService: ModalService,
    private folderService: FolderService,
  ) { }

  ngOnDestroy(): void {
    this.openModalSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.openModalSubscription = this.modalService.openUpdateColorModal
      .subscribe(({ folderID, currentColor }) => {
        this.folderId = folderID;
        this.selectedColor = currentColor;
        this.openModal();
    });
  }

  openModal(): void {
    this.modalColors.nativeElement.classList.add('modal-open');
    this.bodyElement.classList.add('modal-open');
    this.modalOpened = true;
  }

  closeModal(): void {
    this.modalColors.nativeElement.classList.remove('modal-open');
    this.bodyElement.classList.remove('modal-open');
    this.modalOpened = false;
    this.resetData();
  }

  resetData(): void {
    this.selectedColor = '';
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  updateColor(): void {
    this.selectedColor = this.selectedColor ? this.selectedColor : COLORS[0];
    this.folderService.updateFolder({
      folderID: this.folderId,
      color: this.selectedColor,
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

  @HostListener('window:keyup.esc', ['$event'])
  onKeyup() {
    if(this.modalOpened) {
      this.closeModal();
    }
  }
}
