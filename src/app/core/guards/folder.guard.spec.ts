import { TestBed } from '@angular/core/testing';

import { FolderGuard } from './folder.guard';

describe('FolderGuard', () => {
  let guard: FolderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FolderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
