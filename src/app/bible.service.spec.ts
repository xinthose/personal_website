import { TestBed } from '@angular/core/testing';

import { BibleService } from './bible.service';

describe('BibleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BibleService = TestBed.inject(BibleService);
    expect(service).toBeTruthy();
  });
});
