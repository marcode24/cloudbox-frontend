import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('open new folder', () => {
    it('should emit an event to open the new folder modal', () => {
      const folderID = '1234';
      service.openNewFolderModal.subscribe((data) => {
        expect(data).toEqual({ open: true, folderID });
      });
      service.openNewFolder(folderID);
    });
  });

  describe('open new file', () => {
    it('should emit an event to open the new file modal', () => {
      const folderID = '1234';
      service.openNewFileModal.subscribe((data) => {
        expect(data).toEqual({ open: true, folderID });
      });
      service.openNewFile(folderID);
    });
  });

  describe('open update name folder', () => {
    it('should emit an event to open the update name folder modal', () => {
      const folderID = '1234';
      const name = 'test';
      service.openUpdateNameModal.subscribe((data) => {
        expect(data).toEqual({ folderID, name });
      });
      service.openUpdateName(folderID, name);
    });
  });

  describe('open update color folder', () => {
    it('should emit an event to open the update color folder modal', () => {
      const folderID = '1234';
      const currentColor = 'red';
      service.openUpdateColorModal.subscribe((data) => {
        expect(data).toEqual({ folderID, currentColor });
      });
      service.openUpdateColor(folderID, currentColor);
    });
  });
});
