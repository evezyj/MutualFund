import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunddetailComponent } from './funddetail.component';

describe('FunddetailComponent', () => {
  let component: FunddetailComponent;
  let fixture: ComponentFixture<FunddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
