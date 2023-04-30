import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Observable, catchError, map, of } from 'rxjs';

import { Folder } from '@models/folder.model';

import { IFolderCreated, IFolderResponse } from '@interfaces/response.interface';

import Storage from '@utils/storage.util';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  folderCreated: EventEmitter<{folder: Folder, isNew: boolean}> = new EventEmitter();
  folderTemp: Folder;

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
        this.folderCreated.emit({ folder, isNew: true });
      }
    });
  }

  getFolder(folderID: string): Observable<boolean> {
    const url = `${base_url}/folder/${folderID}`;
    return this.http.get<IFolderResponse>(url, this.headers)
      .pipe(map(resp => {
        const { folder } = resp;
        if(!folder) return false;
        this.folderTemp = folder;
        return true;
    }), catchError(() => of(false)));
  }

  updateFolder(
    { folderID, name, color }
    : { folderID: string, name?: string, color?: string }): Observable<IFolderCreated> {
    const url = `${base_url}/folder/update/${folderID}`;
    return this.http.patch<IFolderCreated>(url, { name, color }, this.headers);
  }
}
