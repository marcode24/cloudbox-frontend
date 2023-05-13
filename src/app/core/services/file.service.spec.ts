import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'environments/environment';

import { getOneFileMock } from '@mocks/file.mock';

import { FileService } from './file.service';

const base_url = environment.base_url;

describe('FileService', () => {
  let fileService: FileService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    fileService = TestBed.inject(FileService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(fileService).toBeTruthy();
  });

  describe('create files', () => {
    it('should return true if the files were created', (doneFn) => {
      const files = [new File([''], 'test.txt')];
      const folderID = '1234';
      fileService.createFiles(files, folderID).subscribe((resp) => {
        expect(resp).toBeTrue();
        doneFn();
      });

      const url = `${base_url}/file/upload/${folderID}`;
      const req = httpController.expectOne(url);

      expect(req.request.method).toBe('POST');
      expect(req.request.headers.has('x-token')).toBeTrue();
      expect(req.request.body).toBeInstanceOf(FormData);
      req.flush({ ok: true, files: [] });
    });

    it('should return false if the files were not created', (doneFn) => {
      const files = [new File([''], 'test.txt')];
      const folderID = '1234';
      fileService.createFiles(files, folderID).subscribe((resp) => {
        expect(resp).toBeFalse();
        doneFn();
      });

      const url = `${base_url}/file/upload/${folderID}`;
      const req = httpController.expectOne(url);

      expect(req.request.method).toBe('POST');
      expect(req.request.headers.has('x-token')).toBeTrue();
      expect(req.request.body).toBeInstanceOf(FormData);
      req.flush({ ok: false, files: [] });
    });

    it('should emit the files created', (doneFn) => {
      const files = [new File([''], 'test.txt')];
      const folderID = '1234';
      fileService.filesCreated.subscribe((resp) => {
        expect(resp).toEqual([]);
        doneFn();
      });
      fileService.createFiles(files, folderID).subscribe();

      const url = `${base_url}/file/upload/${folderID}`;
      const req = httpController.expectOne(url);

      expect(req.request.method).toBe('POST');
      expect(req.request.headers.has('x-token')).toBeTrue();
      expect(req.request.body).toBeInstanceOf(FormData);
      req.flush({ ok: true, files: [] });
    });

    it('should emit the total size of the files created', (doneFn) => {
      const files = [new File([''], 'test.txt')];
      const folderID = '1234';
      fileService.updateTotalSize.subscribe((resp) => {
        expect(resp).toEqual(0);
        doneFn();
      });
      fileService.createFiles(files, folderID).subscribe();

      const url = `${base_url}/file/upload/${folderID}`;
      const req = httpController.expectOne(url);

      expect(req.request.method).toBe('POST');
      expect(req.request.headers.has('x-token')).toBeTrue();
      expect(req.request.body).toBeInstanceOf(FormData);
      req.flush({ ok: true, files: [] });
    });
  });

  describe('delete files', () => {
    it('should return true if the files were deleted', (doneFn) => {
      const fileID = '1234';
      fileService.deleteFile(fileID).subscribe((resp) => {
        expect(resp).toBeTrue();
        doneFn();
      });

      const url = `${base_url}/file/${fileID}`;
      const req = httpController.expectOne(url);

      expect(req.request.method).toBe('DELETE');
      expect(req.request.headers.has('x-token')).toBeTrue();
      req.flush({ ok: true, file: {} });
    });

    it('should return false if the files were not deleted', (doneFn) => {
      const fileID = '1234';
      fileService.deleteFile(fileID).subscribe((resp) => {
        expect(resp).toBeFalse();
        doneFn();
      });

      const url = `${base_url}/file/${fileID}`;
      const req = httpController.expectOne(url);

      expect(req.request.method).toBe('DELETE');
      expect(req.request.headers.has('x-token')).toBeTrue();
      req.flush({ ok: false, file: {} });
    });
  });

  describe('download files', () => {
    it('should return the file', (doneFn) => {
      const fileID = '1234';
      fileService.downloadFile(fileID).subscribe((resp) => {
        expect(resp).toBeInstanceOf(Blob);
        doneFn();
      });

      const url = `${base_url}/file/download/${fileID}`;
      const req = httpController.expectOne(url);

      expect(req.request.method).toBe('GET');
      expect(req.request.headers.has('x-token')).toBeTrue();
      req.flush(new Blob());
    });
  });

  describe('search files', () => {
    it("should return the files found with name 'test'", (doneFn) => {
      const search = 'test';
      const filesExpected = [
        { ...getOneFileMock(), name: 'test1' },
        { ...getOneFileMock(), name: 'test22' },
        { ...getOneFileMock(), name: 'test332' },
      ];
      fileService.searchFiles(search).subscribe(({ files }) => {
        const includes = files.every((file) => file.name.includes(search));

        expect(includes).toBeTrue();
        doneFn();
      });

      const url = `${base_url}/file/search?q=${search}`;
      const req = httpController.expectOne(url);

      expect(req.request.method).toBe('GET');
      expect(req.request.headers.has('x-token')).toBeTrue();
      req.flush({ ok: true, files: filesExpected });
    });

    it('should return an empty array if no files were found', (doneFn) => {
      const search = 'test';
      fileService.searchFiles(search).subscribe(({ files }) => {
        expect(files).toEqual([]);
        doneFn();
      });

      const url = `${base_url}/file/search?q=${search}`;
      const req = httpController.expectOne(url);

      expect(req.request.method).toBe('GET');
      expect(req.request.headers.has('x-token')).toBeTrue();
      req.flush({ ok: true, files: [] });
    });
  });
});
