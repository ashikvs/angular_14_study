import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletTest2Component } from './outlet-test2.component';

describe('OutletTest2Component', () => {
  let component: OutletTest2Component;
  let fixture: ComponentFixture<OutletTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletTest2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
