import { TestBed, inject } from '@angular/core/testing';

import { CrunchListService } from './crunch-list.service';

describe('CrunchListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrunchListService]
    });
  });

  it('should be created', inject([CrunchListService], (service: CrunchListService) => {
    expect(service).toBeTruthy();
  }));
});
