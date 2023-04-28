import { Component, Input } from '@angular/core';

import { File } from '@models/file.model';

import { ICONS } from '@constants/file.constant';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {
  @Input() file: File;

  get getIcon(): string {
    const extension = this.file.name.split('.').pop();
    return ICONS[extension as keyof typeof ICONS] || 'bxs-file';
  }
}
