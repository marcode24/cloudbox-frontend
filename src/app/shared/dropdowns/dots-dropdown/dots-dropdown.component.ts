import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { FileService } from '@services/file.service';
import { ModalService } from '@services/modal.service';

import { File } from '@models/file.model';
import { Folder } from '@models/folder.model';

@Component({
  selector: 'app-dots-dropdown',
  templateUrl: './dots-dropdown.component.html',
  styleUrls: ['./dots-dropdown.component.scss']
})
export class DotsDropdownComponent {
  @Input() file: File | Folder;
  @ViewChild('dropdown') dropdown: ElementRef;
  @Input() id: string;
  dropdowns: HTMLUListElement[] = [];
  constructor(
    private fileService: FileService,
    private modalService: ModalService,
  ) { }

  changeVisibility() {
    this.dropdown.nativeElement.classList.toggle('show');
    this.dropdowns = Array.from(document.querySelectorAll('.dropdown-list'));
    this.dropdowns.forEach((dropdown) => {
      if(dropdown.id !== this.buildId()) {
        dropdown.classList.remove('show');
      }
    });
  }

  downloadFile(): void {
    this.fileService.downloadFile(this.file._id as string).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = this.file.name.slice(0, this.file.name.lastIndexOf('.')) || this.file.name;
        link.click();
      },
      complete: () => {
        this.hideDropdown();
      }
    });
  }

  buildId(): string {
    const length = this.file._id?.length as number;
    const id = this.file._id?.substring(length - 10);
    return id as string;
  }

  hideDropdown(): void {
    this.dropdown.nativeElement.classList.remove('show');
  }

  isFile(): boolean {
    return this.file.type === 'file';
  }

  openRenameModal(): void {
    this.hideDropdown();
    this.modalService.openUpdateName(this.file._id as string, this.file.name);
  }
}
