import { Component, Input } from '@angular/core';

import { File } from '@models/file.model';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {
  @Input() file: File;
}
