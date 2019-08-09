import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetWorkComponent } from './net-work.component';

describe('NetWorkComponent', () => {
  let component: NetWorkComponent;
  let fixture: ComponentFixture<NetWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
