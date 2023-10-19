import { TestBed } from '@angular/core/testing';

import { TranslateFrService } from './translate-fr.service';

describe('TranslateFchService', () => {
  let service: TranslateFrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateFrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
