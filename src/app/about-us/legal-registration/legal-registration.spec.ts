import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalRegistration } from './legal-registration';

describe('LegalRegistration', () => {
  let component: LegalRegistration;
  let fixture: ComponentFixture<LegalRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalRegistration],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalRegistration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
