import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerApplyComponent } from './customer-apply.component';

describe('CustomerApplyComponent', () => {
  let component: CustomerApplyComponent;
  let fixture: ComponentFixture<CustomerApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
