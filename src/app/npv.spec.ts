import { TestBed } from '@angular/core/testing';

import { Npv } from './npv';

describe('Npv', () => {
  let service: Npv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Npv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
