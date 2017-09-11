import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyComponent } from './duy.component';

describe('DuyComponent', () => {
  let component: DuyComponent;
  let fixture: ComponentFixture<DuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
