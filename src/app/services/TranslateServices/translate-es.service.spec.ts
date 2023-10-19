import { TestBed } from '@angular/core/testing';

import { TranslateEsService } from './translate-es.service';

describe('TranslateEsService', () => {
  let service: TranslateEsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateEsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
