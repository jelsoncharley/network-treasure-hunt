import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WireSharkComponent } from './wire-shark.component';

describe('WireSharkComponent', () => {
  let component: WireSharkComponent;
  let fixture: ComponentFixture<WireSharkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WireSharkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WireSharkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
