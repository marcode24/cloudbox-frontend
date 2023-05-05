import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Observable, map } from 'rxjs';

import { File as FileModel } from '@models/file.model';

import { IFileResponse } from '@interfaces/response.interface';

import Storage from '@utils/storage.util';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class FileService {
  filesCreated: EventEmitter<FileModel[]> = new EventEmitter();
  fileDeleted: EventEmitter<FileModel> = new EventEmitter();
  updateTotalSize: EventEmitter<number> = new EventEmitter();

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

  createFiles(files: File[], folderID: string): Observable<boolean> {
    const url = `${base_url}/file/upload/${folderID}`;
    const formData = new FormData();
    files.forEach((file) => formData.append('file', file));
    return this.http.post<IFileResponse>(url, formData, this.headers).pipe(map(resp => {
      this.filesCreated.emit(resp.files);
      const total = resp.files.reduce((acc, file) => acc + file.size, 0);
      this.updateTotalSize.emit(total);
      return resp.ok;
    }));
  }

  downloadFile(fileID: string): Observable<Blob> {
    const url = `${base_url}/file/download/${fileID}`;
    return this.http.get(url, { responseType: 'blob', ...this.headers });
  }

  deleteFile(fileID: string): Observable<boolean> {
    const url = `${base_url}/file/${fileID}`;
    return this.http.delete<IFileResponse>(url, this.headers).pipe(map(resp => {
      this.fileDeleted.emit(resp.file);
      this.updateTotalSize.emit(-resp.file.size);
      return resp.ok;
    }));
  }

}
