import { TestBed } from '@angular/core/testing';

import { TrabajoService } from './trabajo.service';

describe('TrabajoService', () => {
  let service: TrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
