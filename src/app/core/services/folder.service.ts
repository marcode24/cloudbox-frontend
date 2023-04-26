import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Observable, map } from 'rxjs';

import { Folder } from '@models/folder.model';

import { IFolderCreated, IFolderResponse } from '@interfaces/response.interface';

import Storage from '@utils/storage.util';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  folderCreated: EventEmitter<Folder> = new EventEmitter();

  get headers() {
    return {
      headers: {
        'x-token': Storage.getLocalStorage('token') || ''
      }
    };
  }

  constructor(
    private http: HttpClient,
  ) { }

  createFolder(folderName: string, folderID: string): void {
    const url = `${base_url}/folder/${folderID}`;
    this.http.post<IFolderCreated>(url, { name: folderName }, this.headers).subscribe({
      next: ({ folder }) => {
        this.folderCreated.emit(folder);
      }
    });
  }

  getFolder(folderID: string): Observable<Folder> {
    const url = `${base_url}/folder/${folderID}`;
    return this.http.get<IFolderResponse>(url, this.headers).pipe(map(resp => resp.folder));
  }
}
