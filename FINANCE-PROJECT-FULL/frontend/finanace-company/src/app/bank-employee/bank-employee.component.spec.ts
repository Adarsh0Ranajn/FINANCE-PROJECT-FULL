import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankEmployeeComponent } from './bank-employee.component';

describe('BankEmployeeComponent', () => {
  let component: BankEmployeeComponent;
  let fixture: ComponentFixture<BankEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
