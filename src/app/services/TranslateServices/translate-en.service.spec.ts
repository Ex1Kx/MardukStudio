import { TestBed } from '@angular/core/testing';

import { TranslateEnService } from './translate-en.service';

describe('TranslateEnService', () => {
  let service: TranslateEnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateEnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
