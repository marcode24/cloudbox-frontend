import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { FileService } from '@services/file.service';
import { ModalService } from '@services/modal.service';

import { getIconFile } from '@utils/icon-file.util';

import {
  ALLOWED_FILE_EXTENSIONS,
  ALLOWED_FILE_TYPES,
  MAX_FILE_SIZE
} from '@constants/file.constant';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit, OnDestroy {

  @ViewChild('modalFiles') modalFiles: ElementRef;
  private bodyElement = document.body as HTMLBodyElement;
  private openModalSubscription: Subscription;
  private modalOpened = false;
  private folderId: string;

  uploading = false;

  files: File[] = [];
  private totalByFileName: { [key: string]: number } = {};

  constructor(
    private modalService: ModalService,
    private fileService: FileService,
  ) { }

  ngOnDestroy(): void {
    this.openModalSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.openModalSubscription = this.modalService.openNewFileModal
      .subscribe(({ folderID }) => {
        this.folderId = folderID;
        this.openModal();
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    let files = Array.from(input.files as FileList);
    files = files.filter((file) => file.size < MAX_FILE_SIZE
      && ALLOWED_FILE_TYPES.includes(file.type));
    this.totalByFileName = [...files].reduce((acc, file) => {
      const total = acc[file.name] || 0;
      return { ...acc, [file.name]: total + 1 };
    }, this.totalByFileName);
    files = [...files].map((file) => {
      const total = this.totalByFileName[file.name];
      if (total > 1) {
        const name = file.name.split('.');
        const extension = name.pop();
        return new File(
            [file],
            `${name.join('.')} (${total - 1}).${extension}`,
            { type: file.type }
          );
      }
      return file;
    });
    this.files = [...this.files, ...files];
  }

  getIcon(file: File): string {
    return getIconFile(file.type);
  }

  allowedFormats(): string {
    return ALLOWED_FILE_EXTENSIONS.map((extension) => `.${extension}`).join(' ');
  }

  validateFiles(): boolean {
    return this.files.length > 0 && this.files.every((file) => file.size < MAX_FILE_SIZE
      && ALLOWED_FILE_TYPES.includes(file.type));
  }

  uploadFiles(): void {
    if (this.validateFiles() && this.folderId) {
      this.uploading = true;
      this.fileService.createFiles(this.files, this.folderId).subscribe({
        next: () => {
          this.uploading = false;
          this.closeModal();
        },
        complete: () => {
          this.uploading = false;
        }
      });
    }
  }

  removeFile(index: number): void {
    this.files.splice(index, 1);
  }

  existsFile(file: File): boolean {
    return this.files.includes(file);
  }

  selectFiles(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.click();
    input.onchange = (event: Event) => {
      this.onFileChange(event);
    };
  }

  openModal(): void {
    this.modalFiles.nativeElement.classList.add('modal-open');
    this.bodyElement.classList.add('modal-open');
    this.modalOpened = true;
  }

  closeModal(): void {
    this.modalFiles.nativeElement.classList.remove('modal-open');
    this.bodyElement.classList.remove('modal-open');
    this.modalOpened = false;
    this.files = [];
  }

  @HostListener('window:keyup.esc', ['$event'])
  onKeyup() {
    if(this.modalOpened) {
      this.closeModal();
    }
  }
}
