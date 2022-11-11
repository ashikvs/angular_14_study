import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletTest1Component } from './outlet-test1.component';

describe('OutletTest1Component', () => {
  let component: OutletTest1Component;
  let fixture: ComponentFixture<OutletTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletTest1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
