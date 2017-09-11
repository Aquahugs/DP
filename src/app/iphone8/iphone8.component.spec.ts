import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone8Component } from './iphone8.component';

describe('Iphone8Component', () => {
  let component: Iphone8Component;
  let fixture: ComponentFixture<Iphone8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iphone8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iphone8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
