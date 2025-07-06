import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpvResults } from './npv-results';

describe('NpvResults', () => {
  let component: NpvResults;
  let fixture: ComponentFixture<NpvResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpvResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpvResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
