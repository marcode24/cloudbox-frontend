import { TestBed } from '@angular/core/testing';

import { IAlert } from '@interfaces/alert.interface';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit an alert', () => {
    const alert: IAlert = {
      type: 'success',
      message: 'Test alert',
    };
    service.alert.subscribe((data) => {
      expect(data).toEqual(alert);
    });
    service.emitAlert(alert);
  });
});
