import { TestBed } from '@angular/core/testing';

import { StorageserviceService } from './storage.service';

describe('StorageserviceService', () => {
  let service: StorageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
