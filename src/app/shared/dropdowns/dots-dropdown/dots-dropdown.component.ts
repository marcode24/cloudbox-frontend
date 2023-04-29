import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { FileService } from '@services/file.service';

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

  constructor(
    private fileService: FileService,
  ) { }

  changeVisibility() {
    this.dropdown.nativeElement.classList.toggle('show');
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

  hideDropdown(): void {
    this.dropdown.nativeElement.classList.remove('show');
  }
}
