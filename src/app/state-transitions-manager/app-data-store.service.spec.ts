import { TestBed } from '@angular/core/testing';

import { AppDataStoreService } from './app-data-store.service';

describe('AppDataStoreService', () => {
  let service: AppDataStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDataStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
