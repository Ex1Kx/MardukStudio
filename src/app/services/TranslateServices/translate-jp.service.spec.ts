import { TestBed } from '@angular/core/testing';

import { TranslateJpService } from './translate-jp.service';

describe('TranslateJpService', () => {
  let service: TranslateJpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateJpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
