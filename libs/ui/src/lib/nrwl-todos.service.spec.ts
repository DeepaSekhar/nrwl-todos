import { TestBed } from '@angular/core/testing';

import { NrwlTodosService } from './nrwl-todos.service';

describe('NrwlTodosService', () => {
  let service: NrwlTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NrwlTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
