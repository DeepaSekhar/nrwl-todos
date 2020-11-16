import { TestBed } from '@angular/core/testing';

import { ServiceUiService } from './service-ui.service';

describe('ServiceUiService', () => {
  let service: ServiceUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
