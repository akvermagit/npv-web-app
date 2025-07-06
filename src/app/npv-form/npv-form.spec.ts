import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpvForm } from './npv-form';

describe('NpvForm', () => {
  let component: NpvForm;
  let fixture: ComponentFixture<NpvForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpvForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpvForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
